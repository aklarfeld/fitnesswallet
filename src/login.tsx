import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import generatePass from './generate';
import { clubs, Club } from './data/clubs';

const { useState } = React;

const fetchFitnessSFAuth = async ({ email, password }: { email: string, password: string }) => axios.post('https://fsf-api-production.herokuapp.com/auth', {
  email,
  password,
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    let response;
    try {
      response = await axios.post('https://fsf-api-production.herokuapp.com/auth', {
        email,
        password,
      });
    } catch(e) {
      console.error(e);
    }

    if(!response) {
      setError('Error fetching credentials.')
    } else {
      const user = response.data.user;
      const club = clubs.find(club => user.favoriteLocation === club.locationId) as Club;
      const url = await generatePass({ serialNumber: user.scanCode, fullName: user.name, club })
      setDownloadUrl(url);
    }
    setLoading(false);
  };

  const onChange = (setValue: (arg:string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="content">
      <Form>
        <Alert show={!!error}variant='danger' dismissible onClose={() => setError('')}>{error}</Alert>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onChange(setEmail)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChange(setPassword)} />
          <Form.Text className="text-muted">
            Your credentials won&apos;t get saved anywhere on our servers.
          </Form.Text>
        </Form.Group>
        {!downloadUrl && <Button disabled={loading} variant="primary" className="center" type="submit" onClick={onClick}>
          Generate Pass
        </Button>}
        {/* @ts-expect-error */}
        {downloadUrl && (<Button disabled={loading} download="fitnesssf.pkpass" variant="success" className="center" type="submit" href={downloadUrl}>
          Download Pass!
        </Button>)}
      </Form>
    </div>
  );
}

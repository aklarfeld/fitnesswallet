import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import generatePass from './generate';
const { useState } = React;

const fetchFitnessSFAuth = async ({ email, password }: { email: string, password: string }) => axios.post('https://fsf-api-production.herokuapp.com/auth', {
  email,
  password,
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('')

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await fetchFitnessSFAuth({ email, password });
    console.log({ data })
    const url = await generatePass({ serialNumber: data.user.scanCode, fullName: data.user.name, locationData: { latitude: 0, longitude: 0 } })
    setDownloadUrl(url);
  };

  const onChange = (setValue: (arg:string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="content">
      <Form>
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
        {!downloadUrl && <Button variant="primary" className="center" type="submit" onClick={onClick}>
          Submit
        </Button>}
        {downloadUrl && (<Button variant="secondary" className="center" type="submit" href={downloadUrl}>
          Download Pass
        </Button>)}
      </Form>
    </div>
  );
}

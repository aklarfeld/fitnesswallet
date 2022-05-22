import * as React from 'react';

export function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-facebook"
      viewBox="0 0 20 20"
    >
      <path d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z" />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-twitter"
      viewBox="0 0 20 20"
    >
      <path d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z" />
    </svg>
  );
}

export function QRIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="//www.w3.org/2000/svg"
      xmlnsXlink="//www.w3.org/1999/xlink"
      {...props}
    >
      <title>QR coder</title>
      <g transform="scale(.5)" fill="none" stroke="#000" strokeWidth={2}>
        <path id="prefix__a" d="M3 3h8v8H3V3zm3 4h2" />
        <use xlinkHref="#prefix__a" x={18} />
        <use xlinkHref="#prefix__a" y={18} />
        <path d="M18 3h-3v4h2v4h-2v3M2 15h2m2 0h4m6 0h2m2 0h4m4 0h2M4 17h2m2 0h8m6 0h2m2 0h4M14 19h2m2 0h2m6 0h2M16 21h2m2 0h8M14 23h2m2 0h2m4 0h2m2 0h2M14 25h4m2 0h2m2 0h4M14 27h2m6 0h2m4 0h2M16 29h8m2 0h2" />
      </g>
    </svg>
  );
}

export function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="//www.w3.org/2000/svg"
      xmlnsXlink="//www.w3.org/1999/xlink"
      width={40}
      height={34.016}
      viewBox="0 0 40 34.016"
      {...props}
    >
      <defs>
        <path
          id="prefix__a"
          d="M33.601 21.437l-.001.597c-.001.168-.003.335-.008.503-.01.365-.032.733-.097 1.094a3.689 3.689 0 01-.347 1.041 3.499 3.499 0 01-1.55 1.53 3.796 3.796 0 01-1.054.343 7.368 7.368 0 01-1.109.096c-.17.004-.34.007-.509.007l-.605.001H12.839l-.605-.001c-.17-.001-.34-.003-.509-.007a7.5 7.5 0 01-1.109-.096 3.763 3.763 0 01-1.054-.343 3.537 3.537 0 01-1.55-1.53 3.627 3.627 0 01-.347-1.041 7.303 7.303 0 01-.097-1.094 21.093 21.093 0 01-.008-.503l-.001-.597V10.693l.001-.381c.001-.107.002-.214.005-.321.006-.233.02-.468.062-.698a2.242 2.242 0 011.211-1.641c.214-.108.435-.177.672-.219.234-.042.472-.055.708-.062.108-.003.217-.004.325-.005l.386-.001H30.129l-1.374.001 1.478-.001.386.001c.108.001.217.002.325.005.236.006.474.02.708.062.237.042.457.111.672.219a2.242 2.242 0 01.989.977c.11.212.179.43.222.664.042.23.056.465.062.698a48.388 48.388 0 01.006.702v10.744z"
        />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <path
        clipPath="url(#prefix__b)"
        fill="#D9D6CC"
        d="M33.601 9.87v16.78H7.559V9.852c0-1.423 1.101-2.457 2.459-2.457h21.123c1.358 0 2.459 1.025 2.459 2.457l.001.018z"
      />
      <linearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={20.581}
        y1={16.408}
        x2={20.581}
        y2={18.349}
      >
        <stop offset={0} stopColor="#d9d6cc" />
        <stop offset={0.305} stopColor="#c7c4bb" />
        <stop offset={0.918} stopColor="#979790" />
        <stop offset={1} stopColor="#90908a" />
      </linearGradient>
      <path
        clipPath="url(#prefix__b)"
        fill="url(#prefix__c)"
        d="M7.56 16.408h26.041v1.941H7.56z"
      />
      <g clipPath="url(#prefix__b)">
        <defs>
          <path
            id="prefix__d"
            d="M8.644 20.764v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.769-1.052c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.311h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
          />
        </defs>
        <clipPath id="prefix__e">
          <use xlinkHref="#prefix__d" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#prefix__e)"
          fill="#3B99C9"
          d="M8.644 20.764v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.769-1.052c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.311h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
        />
        <g clipPath="url(#prefix__e)">
          <image
            overflow="visible"
            opacity={0.17}
            width={171}
            height={99}
            xlinkHref="data:image/png;base64,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"
            transform="matrix(.16 0 0 .16 6.92 8.443)"
          />
          <path
            fill="#FFF"
            d="M8.644 22.932v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
          />
        </g>
        <path
          clipPath="url(#prefix__e)"
          fill="#FFB003"
          d="M8.644 22.932v-10.15-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206v10.395H8.644z"
        />
        <g clipPath="url(#prefix__e)">
          <image
            overflow="visible"
            opacity={0.16}
            width={171}
            height={99}
            xlinkHref="data:image/png;base64,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 AAAASUVORK5CYII="
            transform="matrix(.16 0 0 .16 6.943 10.689)"
          />
          <path
            fill="#FFF"
            d="M8.644 25.1V14.95v-.244c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
          />
        </g>
        <path
          clipPath="url(#prefix__e)"
          fill="#50BE3D"
          d="M8.644 25.1V14.95v-.244c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.45 1.45 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003H30.31h-.869 1.182c.069 0 .138.001.206.003.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
        />
        <g clipPath="url(#prefix__e)">
          <image
            overflow="visible"
            opacity={0.17}
            width={171}
            height={85}
            xlinkHref="data:image/png;base64,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"
            transform="matrix(.16 0 0 .16 6.943 12.857)"
          />
          <path
            fill="#FFF"
            d="M8.644 25.1v-7.982-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.432 1.432 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003l.245-.001H30.31h-.869.937a20.009 20.009 0 01.451.004c.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
          />
        </g>
        <path
          clipPath="url(#prefix__e)"
          fill="#F26D5F"
          d="M8.644 25.1v-7.982-.245c0-.069.001-.137.003-.206.004-.149.013-.3.039-.448a1.432 1.432 0 01.768-1.053c.137-.069.276-.113.427-.14.148-.027.299-.035.449-.039.069-.002.137-.003.206-.003l.245-.001H30.31h-.869.937a20.009 20.009 0 01.451.004c.15.004.301.013.449.039.15.027.29.071.427.14a1.432 1.432 0 01.768 1.053c.027.148.036.299.04.448.002.069.003.137.003.206V25.1H8.644z"
        />
      </g>
      <g clipPath="url(#prefix__b)">
        <image
          overflow="visible"
          opacity={0.12}
          width={181}
          height={79}
          xlinkHref="data:image/png;base64,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"
          transform="matrix(.16 0 0 .16 6.121 15.425)"
        />
        <path
          fill="#FFF"
          d="M33.601 26.906H7.559V17.15h6.324l.466.001c.131.001.262.002.392.006.285.008.572.024.854.075.286.051.552.135.812.267-.055-.028.715.288 1.391 1.339.488.758 1.436 1.562 2.763 1.562s2.275-.804 2.763-1.562c.642-.999 1.356-1.322 1.39-1.339.26-.132.526-.216.812-.267.282-.051.569-.067.854-.075.131-.004.262-.005.392-.006l.466-.001H33.6v9.756z"
        />
      </g>
      <path
        clipPath="url(#prefix__b)"
        fill="#D9D6CC"
        d="M33.601 26.906H7.559V17.15h6.324l.466.001c.131.001.262.002.392.006.285.008.572.024.854.075.286.051.552.135.812.267-.055-.028.715.288 1.391 1.339.488.758 1.436 1.562 2.763 1.562s2.275-.804 2.763-1.562c.642-.999 1.356-1.322 1.39-1.339.26-.132.526-.216.812-.267.282-.051.569-.067.854-.075.131-.004.262-.005.392-.006l.466-.001H33.6v9.756z"
      />
    </svg>
  );
}

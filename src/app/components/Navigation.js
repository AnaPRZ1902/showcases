import Link from "next/link" 

const links = [{
  label: 'home',
  route: '/'
},{
  label: 'About',
  route: '/about'
} ]

export default function Navigation({children}) {
  return (
    <html >
      <head>
        <title>Una app nueva por que soy un torombolo </title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              {links.map(({label,route})=>(
                <li key={route}> 
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

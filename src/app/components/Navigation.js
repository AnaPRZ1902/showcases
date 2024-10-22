import Link from "next/link" 


const links = [{
  label: 'home',
  route: '/'
},{
  label: 'About',
  route: '/about'
},{
  label: 'Posts',
  route: '/posts'
} ]

export default function Navigation({children}) {
  return (
    <html >
      <head>
        <title>Una app nueva por que soy un torombolo </title>
      </head>
      <body>
        <header className="styles.header ">
          <nav>
            <ul className="styles.navigation">
              {links.map(({label,route})=>(
                <li key={route} className="text-2xl text-red-300"> 
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

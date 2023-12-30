import Title from "./Title"

function WhatICanDo() {
  return (
    <div>
      <Title title="What I can do?" />

      <div className='bg-main p-4 text-white  border  border-blue mb-4 grid gap-2 rounded'>

        <h4 className="text-blue uppercase font-bold text-lg">Frontend</h4>

        <ul className=" list-disc ml-4">

          <li>Develop web applications  with React using typescript</li>

          <li>Styles with CSS or Tailwindcss</li>

          <li>Responsive design</li>

          <li>Zustand to handle the global state</li>

        </ul>

      </div>

      <div className='bg-main p-4  text-white mb-4 border  border-blue grid gap-2 rounded'>

        <h4 className="text-blue uppercase font-bold text-lg" >Backend</h4>

        <ul className=" list-disc ml-4" >

          <li>Develop web Apis with ASP NET Core</li>

          <li>Microsoft SQL Server </li>

          <li>Onion architecture</li>

          <li>Entity framework</li>

        </ul>


      </div>
    </div>
  )
}

export default WhatICanDo
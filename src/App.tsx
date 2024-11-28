import './App.css'
import { Navbar, Button, Label, Drawer, Alert, TextInput } from 'flowbite-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { useState, useEffect } from 'react'
import { HiInformationCircle } from 'react-icons/hi2'
import { Formik, Form, ErrorMessage } from 'formik'
import { adminValues } from './Validation'
import { useDispatch, useSelector } from 'react-redux'
import { GETDATA } from './redux/States'
const App = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const { data } = useSelector((state: { data: never }) => state.data)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/v1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        console.log(data);
        dispatch(GETDATA(data))
      } catch (error) {
        console.log(error);
        
      }
    }
    getData()
  }, [])
  return (  
    <div>
      <Router>
        <Navbar fluid rounded>
            <Navbar.Brand>
                <h1 className='self-center whitespace-nowrap text-xl font-semibold dark:text-white text-red-800'>SkillUp</h1>  
            </Navbar.Brand>
          <div className='flex md:order-2'>
              <Button onClick={() => setShowDrawer(true)}>Login</Button>
          </div>
        </Navbar>
        <Drawer onClose={() => setShowDrawer(false)} open={showDrawer} position='top'>
          <Drawer.Items>
            <Alert color='warning' icon={HiInformationCircle}><span className='font-bold'>Info</span> Only An Admin Can Login</Alert>
            <div className="flex flex-col h-fit m-ma mt-2 p-3" style={{width: '50%'}}>
              <div className="text-white font-bold text-2xl text-center">Login</div>
              <Formik initialValues={adminValues} onSubmit={(values) => console.log(values)
              }>
                {({values, handleChange, handleBlur, handleSubmit}) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="flex-wrap flex flex-col p-3">
                      {/* Admin Email */}
                      <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                        <TextInput type="email" id="email" name="email" className="rounded-md mt-1 mb-2" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Email'/>
                        <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      {/*Admin Password*/}
                      <div>
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                        <TextInput type="password" id="password" name="password" className="rounded-md mt-1 mb-2" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password'/>
                        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <Button className='mt-2' type='submit'>Login</Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Drawer.Items>
        </Drawer>
        <section>
          <Routes>
            <Route path='/' element={<Home data={data} />} />
          </Routes>
        </section>
        </Router>
    </div>
  )
}

export default App

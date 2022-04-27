import '@material-ui/icons';
import 'antd/dist/antd.css'
import '@ant-design/icons'

import './App.css';

import { Button, Form , Input} from 'antd';

import img from './Images/Sign-up-bro.svg';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';


function App() {
  
  const formItemLayout = {
    
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};

const [form] = Form.useForm();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="img" />
   
       <div className='Form'>
      
      
       <Form 
        layout='vertical'
        {...formItemLayout}
        form={form} 
       >
         <Form.Item
          label="Username"
          name="username"
         
          rules={[
            {
              required: false,
              message: 'Please input your Username!',
            },
          ]}
          hasFeedback
          >
      <Input 
      prefix={<PersonTwoToneIcon style={{ color: "#92E3A9"}} />} 
      placeholder="Username"/>

          </Form.Item>

         <Form.Item 
          label="Email"
          name="email"
        
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
          hasFeedback
          >
      <Input 
      prefix={<MailTwoToneIcon style={{ color: "#92E3A9"}}/>} 
      type="email"   
      placeholder="Email"/>

          </Form.Item>

          <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password 
          prefix={<LockTwoToneIcon style={{ color: "#92E3A9"}}/>} 
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your Password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password 
          prefix={<LockTwoToneIcon style={{ color: "#92E3A9"}}/>} 
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Button 
      style={{
     
      width:"210px",
      height:"40px",
      lineHeight:"20px",
      borderRadius: "12px", 
      fontWeight:"500",
      fontSize: "20px",
      border: " #92E3A9", 
      backgroundColor: "#92E3A9"}}
      type='primary' htmlType='submit'>

        SIGN UP
      </Button>
     <br>
     </br>
     <br>
     </br>
      
      <p> Already have an Account?
      &nbsp;
      <a style={{ fontSize:"17px", fontWeight:"500", color: "#92E3A9"}}>LOGIN</a>
        </p>
      
       </Form>


       </div>
   
      
      </header> 
    </div>
  );
}

export default App;

import {Link} from 'react-router-dom';

const NotFound = ()=>{
  return (
    <>
      <div>这里是404页面</div>
      <Link to="/">回主页</Link>
    </>
  )
}

export default NotFound;
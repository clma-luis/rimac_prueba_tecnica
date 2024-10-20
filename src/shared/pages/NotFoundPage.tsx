import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ 
      height: "90vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      padding: "0 20px"
    }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;

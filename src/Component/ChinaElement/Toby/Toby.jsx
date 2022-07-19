function Toby(props) {
  const { children, className} = props;  


  
  return (
    <div className={`toby ${className}`}>
       
      {children}
    </div>
  );
}
export default Toby;
 
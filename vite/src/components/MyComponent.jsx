// HOC

const withLogger = (WrappCOMP) => {
  console.log('Name: ', WrappCOMP.name);
  
  return (props) => <WrappCOMP {...props}/>
};

export default withLogger;

import React from 'react';

const Message: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'grid',
   flexDirection: 'column',
   gridTemplateColumns: 'repeat(4, 1fr)',
   gridTemplateRows: 'auto',
   gap: '100px',
   width: '100%',
   height: '100%',
justifyContent: 'space-between',

   
  };

  const item0: React.CSSProperties = {
    backgroundColor: 'yellow',
    color: 'white',
    padding: '40px',
    width: '200px',
    height: '300px',
      marginTop:'2px',
    borderRadius: '5px',
    marginLeft: '30px',
  
  };
const item1: React.CSSProperties ={
    backgroundColor: 'red',
    padding: '30px',
    borderRadius: '90px',
    width: '90px',
    height: '90px',
    marginTop:'2px',
    marginLeft: '-550px'
    
};
const item2: React.CSSProperties ={
    backgroundColor: '#FF0090',
    padding: '30px',
    borderRadius: '10px',
    width: '200px',
    height: '50px',
    marginLeft: '-820px',
     marginTop:'2px'
    
};
const item3: React.CSSProperties ={
    backgroundColor: '#3457D5',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    height: '100px',
     marginTop:'2px',
    marginLeft: '-800px'
     
};

const item4: React.CSSProperties ={
    backgroundColor: '#89CFF0',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    height: '100px',
    marginTop: '-290px',
    marginLeft:'350px',
   
 };

const item5: React.CSSProperties ={
    backgroundColor: '#FF0090',
    padding: '30px',
    borderRadius: '90px',
    width: '90px',
    height: '90px',
    marginLeft: '10px',
    marginTop: '-310px'
     
    
};
const item6: React.CSSProperties ={
    backgroundColor: '#89CFF0',
    padding: '30px',
    borderRadius: '90px',
    width: '90px',
    height: '90px',
    marginLeft: '-150px',
    marginTop: '-310px'
     
    
};
const item7: React.CSSProperties ={
    backgroundColor: '#3457D5',
    padding: '30px',
    width: '400px',
    height: '70px',
    marginTop: '-95px',
    marginLeft: '-1670px'
};
const item8: React.CSSProperties ={
    backgroundColor: '#89CFF0',
    padding: '30px',
    borderRadius: '90px',
    width: '90px',
    height: '90px',
    marginLeft: '600px',
    marginTop: '-245px'
};
const item9: React.CSSProperties ={
    backgroundColor: 'yellow',
    padding: '30px',
   width: '400px',
    height: '70px',
    marginRight: '-100px',
    marginTop: '-250px'
};

const item10: React.CSSProperties ={
    backgroundColor: '#3457D5',
   padding: '30px',
    borderRadius: '90px',
   width: '90px',
    height: '90px',
    marginTop: '-80px',
    marginRight: '160px',
    marginLeft:'-90px'
};
const item11: React.CSSProperties ={
    backgroundColor: '#e436aaff',
    padding: '30px',
    width: '900px',
    height: '100px',
    borderRadius: '10px',
    marginLeft: '-1400px',
    marginTop: '-90px'

    
};
const item12: React.CSSProperties ={
    backgroundColor: '#3457D5',
    padding: '30px',
    borderRadius: '90px',
    width: '90px',
    height: '90px',
    marginTop: '-260px',
    marginLeft: '50px'
   
};

  return (
    <div style={containerStyle}>
      <div style={item0}></div>
      <div style={item1}></div>
      <div style={item2}></div>
      <div style={item3}></div>
      <div style={item4}></div>
      <div style={item5}></div>
      <div style={item6}></div>
      <div style={item7}></div>
      <div style={item8}></div>
      <div style={item9}></div>
      <div style={item10}></div>
      <div style={item11}></div>
      <div style={item12}></div>

    </div>
    
  );
};

export default Message;

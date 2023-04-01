import React from 'react';
import {Box, Button, styled} from '@mui/material';

const Container = styled(Box)`
background: linear-gradient(to right, #159957, #155799);
    display: flex;
    flexwrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const FirstBox = styled(Box)`
    margin: 30px;
    width: 60%;
    height: 72%;
    border-radius: 5px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

const SecondBox = styled(Box)`
    margin: 30px;
    width: 30%;
    height: 35%;
    border-radius: 5px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`


const Template = () => {

    const icons = [
        {name: 'like', icon: '👍'},
        {name: 'dislike', icon: '👎'},
        {name: 'love', icon: '😻'},
        {name: 'funny', icon: '😂'},
        {name: 'happy', icon: '😊'},
        {name: 'sad', icon: '😔'},
        {name: 'angry', icon: '😡'}
    ];


  return (
    <Container>
      <FirstBox >
        <iframe title="Video 1" width="100%" height="100%" src="https://www.youtube.com/embed/video-1" frameborder="0" allowfullscreen></iframe>
        {/* <div style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {icons.map((icon) => (
            <button key={icon.name} style={{ margin: '5px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', transition: 'transform 0.2s' }} title={icon.name}>
              {icon.icon}
              <span style={{ display: 'none', position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)', background: '#000', color: '#fff', padding: '5px', borderRadius: '5px' }}>
                {icon.name}
              </span>
            </button>
          ))}
        </div> */}
      </FirstBox>
      <SecondBox >
        <iframe title="Video 2" width="100%" height="100%" src="https://www.youtube.com/embed/DqHuIOogn3Y" frameborder="0" allowfullscreen></iframe>
        <div style={{ position: 'absolute', bottom: '0', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {icons.map((icon) => (
            <button key={icon.name} style={{ margin: '5px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', transition: 'transform 0.2s' }} title={icon.name}>
              {icon.icon}
              <span style={{ display: 'none', position: 'absolute', bottom: 'calc(100% + 5px)', left: '50%', transform: 'translateX(-50%)', background: '#000', color: '#fff', padding: '5px', borderRadius: '5px' }}>
                {icon.name}
              </span>
            </button>
          ))}
        </div>
      </SecondBox>
    </Container>
  );
};

export default Template;



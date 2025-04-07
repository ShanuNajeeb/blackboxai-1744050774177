const particlesConfig = {
  "particles": {
    "number": { 
      "value": 80, 
      "density": { 
        "enable": true, 
        "value_area": 800 
      } 
    },
    "color": { 
      "value": "#00FFFF" 
    },
    "shape": { 
      "type": "circle" 
    },
    "opacity": { 
      "value": 0.5, 
      "random": true 
    },
    "size": { 
      "value": 3, 
      "random": true 
    },
    "line_linked": { 
      "enable": true, 
      "distance": 150, 
      "color": "#00FFFF", 
      "opacity": 0.4, 
      "width": 1 
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { 
        "enable": true, 
        "mode": "repulse" 
      },
      "onclick": { 
        "enable": true, 
        "mode": "push" 
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = particlesConfig;
}

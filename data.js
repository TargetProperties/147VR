var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2950560029995728,
        "pitch": -0.42026101253474835,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.2950559759762612,
          "pitch": -0.320725529792087,
          "rotation": 0,
          "target": "1-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-porch",
      "name": "Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.622837367623232,
        "pitch": -0.03182434574740434,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.6664063068720978,
          "pitch": 0.05218956585524026,
          "rotation": 0,
          "target": "2-hallway"
        },
        {
          "yaw": 0.07707209713625218,
          "pitch": 0.3396436238524796,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0361571717602054,
          "pitch": 0.4342599042418165,
          "rotation": 0,
          "target": "6-bedroom-3"
        },
        {
          "yaw": 0.7856536388286877,
          "pitch": 0.7944779417505679,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": -1.0175244157716463,
          "pitch": -0.09269671859935258,
          "rotation": 5.497787143782138,
          "target": "7-to-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5717641349935256,
        "pitch": 0.8889776941974397,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.8758779700546597,
          "pitch": 0.8155441543957451,
          "rotation": 0.7853981633974483,
          "target": "5-bedroom-2"
        },
        {
          "yaw": -2.1130573647456394,
          "pitch": 0.8703352556067792,
          "rotation": 5.497787143782138,
          "target": "4-bedroom-1"
        },
        {
          "yaw": 1.5849365863155214,
          "pitch": 0.7282362082537492,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0518179428380847,
        "pitch": 0.40268937536600724,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.526731806006797,
          "pitch": 0.31361213835280566,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.5069001832741833,
        "pitch": 0.6937689826396571,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.42602521612203503,
          "pitch": 0.48728121891474885,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.5061126981769224,
        "pitch": 0.21581625807046834,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.481646722935281,
          "pitch": 0.24690739613155088,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-to-i-floor",
      "name": "To I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9217998962724643,
          "pitch": -0.060068517667151156,
          "rotation": 5.497787143782138,
          "target": "8-i-floor"
        },
        {
          "yaw": 3.1177715221448263,
          "pitch": 0.7707814371448496,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.909143561503674,
        "pitch": 1.400021728058583,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.347578089395796,
          "pitch": 0.27975672142450314,
          "rotation": 0,
          "target": "9-living-room"
        },
        {
          "yaw": -3.0890990299157988,
          "pitch": 0.6797685790728263,
          "rotation": 0,
          "target": "11-bathroom-1"
        },
        {
          "yaw": 2.608576162246445,
          "pitch": 0.5178858530581376,
          "rotation": 5.497787143782138,
          "target": "10-kitchen"
        },
        {
          "yaw": 1.487241469336885,
          "pitch": 0.6492359861369774,
          "rotation": 0,
          "target": "12-bedroom-4"
        },
        {
          "yaw": 0.026390816751520774,
          "pitch": -0.015502270062306422,
          "rotation": 5.497787143782138,
          "target": "13-to-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.0814510319817323,
        "pitch": 0.1352137187445681,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.5944890369225995,
          "pitch": 0.2791533611049779,
          "rotation": 0,
          "target": "8-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.467704856155887,
        "pitch": 0.24314971497496352,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.6854970910674307,
          "pitch": 0.3255201948159012,
          "rotation": 0,
          "target": "8-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.49457966545613985,
        "pitch": 0.5599430415294293,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.9650994467354073,
          "pitch": 0.5909944712620323,
          "rotation": 0,
          "target": "8-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.1678590763474048,
        "pitch": 0.2457899538028112,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.9050038241451865,
          "pitch": 0.27379712571848813,
          "rotation": 0,
          "target": "8-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-to-ii-floor",
      "name": "To II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5851841527152786,
        "pitch": -0.14672802262474605,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.023863766248867435,
          "pitch": 0.8622789225680254,
          "rotation": 0,
          "target": "8-i-floor"
        },
        {
          "yaw": 1.2865612725647342,
          "pitch": -0.1268775160930229,
          "rotation": 5.497787143782138,
          "target": "14-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6724659069362282,
        "pitch": 1.0344861102581433,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.116202023688615,
          "pitch": 0.5401846822613763,
          "rotation": 0,
          "target": "15-bathroom-2"
        },
        {
          "yaw": 0.950954482818922,
          "pitch": 0.5808540437549361,
          "rotation": 0,
          "target": "16-bedroom-5"
        },
        {
          "yaw": -2.1098334447929314,
          "pitch": 0.3032599478063176,
          "rotation": 0,
          "target": "17-bedroom-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.38998590293936886,
        "pitch": 0.5205278531613367,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.873453508922636,
          "pitch": 0.4755979319709862,
          "rotation": 0,
          "target": "14-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7995951310706015,
        "pitch": 0.15272264780018396,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.3586441532726417,
          "pitch": 0.42668747471165425,
          "rotation": 0,
          "target": "14-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-6",
      "name": "Bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.4148285788977386,
        "pitch": 0.4331912628012038,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.1263764968517123,
          "pitch": 0.33952964748744385,
          "rotation": 0,
          "target": "14-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "147 Victoria Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

import { LabyrinthConstraints } from "../@types/inGame";

export const LABYRINTH_LEVELS = [
    118.5, //0
    109.0, //1
     99.8, //2
     90.1, //3
     80.9, //4
     71.6, //5
     62.3, //6
     52.7, //7
     43.3, //8
     34.0, //9
      2.5 //10
]

export const LABYRINTH_CONSTRAINTS: LabyrinthConstraints = [
    {//0
        walls: [[]],
        laddersDown: [[179.5, 180.6]],
        laddersUp: [[]]
    },
    {//1
        walls: [[28, 31.75], [208.25, 211.9]],
        laddersDown:[[0.0 ,0.7],[359.25, 360.0], [239.35, 240.8], [119.2, 120.5]],
        laddersUp: [[179.5, 180.6]]
    },
    {//2
        walls: [[27.9, 31.97], [177.97,182.0], [268.05, 272.09]],
        laddersDown: [[59.12, 60.67], [209.23, 210.8], [299.28, 300.84]],
        laddersUp: [[0.0, 0.7], [119.2, 120.5], [239.35, 240.8], [359.25, 360.0]]
    },
    {//3
        walls: [[147.74, 152.19], [267.87, 272.37], [327.85, 332.23]],
        laddersDown: [[88.94, 90.68], [239.22, 241.0], [299.19, 300.94]],
        laddersUp: [[59.12, 60.67], [209.23, 210.8], [299.28, 300.84]]
    },
    {//4
        walls: [[117.24, 122.31], [267.6, 272.62], [327.64, 332.6]],
        laddersDown: [[0.0 ,0.9], [359.1, 360.0], [148.93, 150.84], [299.10, 301.07]],
        laddersUp: [[88.94, 90.68], [239.22, 241.0], [299.19, 300.94]]
    },
    {//5
        walls: [[56.97, 62.62], [237.28, 243.03]],
        laddersDown: [[118.76, 121.0]],
        laddersUp: [[0.0 ,0.9], [359.1, 360.0], [148.93, 150.84], [299.10, 301.07]]
    },
    {//6
        walls: [[0.0, 3.19], [356.690, 360.0]],
        laddersDown: [[178.67, 181.20]],
        laddersUp: [[118.76, 121.0]]
    },
    {//7
        walls: [[55.97, 63.9]],
        laddersDown: [[268.7, 271.72]],
        laddersUp: [[178.67, 181.20]]
    },
    {//8
        walls: [[114.74, 124.54]],
        laddersDown: [[27.97, 31.71], [87.69, 91.42]],
        laddersUp: [[268.7, 271.72]]
    },
    {//9
        walls: [[53.09, 65.90], [263.9, 276.7]],
        laddersDown: [[237.85, 242.89]],
        laddersUp: [[27.97, 31.71], [87.69, 91.42]],
    },
    {//10
        walls: [[]],
        laddersDown: [[]],
        laddersUp: [[]],
    }
]

export const bgColors = [
    'rgb(240 253 244)',//0
    'rgb(220 252 231)',//1
    'rgb(187 247 208)',//2
    'rgb(134 239 172)',//3
    'rgb(74 222 128)',//4
    'rgb(34 197 94)',//5
    'rgb(22 163 74)',//6
    'rgb(21 128 61)',//7
    'rgb(22 101 52)',//8
    'rgb(20 83 45)'//9
]
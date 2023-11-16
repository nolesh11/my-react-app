import React from "react";

// type StringOne = {
//   textOne: string
// }
// type StringTwo = {
//   textTwo: string
// }
// type StringThree = {
//   textThree: string
// }
// type StringFour = {
//   textFour: string
// }
// type StringFive = {
//   textFive: string
// }
// type StringSix = {
//   textSix: string
// }
// type StringSeven = {
//   textSeven: string
// }
// type StringEight = {
//   textEight: string
// }
// type StringNine = {
//   textNine: string
// }
// type StringTen = {
//   textTen: string
// }

// type AllString = StringOne & StringTwo & StringThree & StringFour & StringFive & StringSix & StringSeven & StringEight & StringNine & StringTen

// type NumberOne = {
//   numberOne: number
// }
// type NumberTwo = {
//   numberTwo: number
// }
// type NumberThree = {
//   numberThree: number
// }
// type NumberFour = {
//   numberFour: number
// }
// type NumberFive = {
//   numberFive: number
// }
// type NumberSix = {
//   numberSix: number
// }
// type NumberSeven = {
//   numberSeven: number
// }
// type NumberEight = {
//   numberEight: number
// }
// type NumberNine = {
//   numberNine: number
// }
// type NumberTen = {
//   numberTen: number
// }

// type BooleanOne = {
//   booleanOne: boolean
// }
// type BooleanTwo = {
//   booleanTwo: boolean
// }
// type BooleanThree = {
//   booleanThree: boolean
// }
// type BooleanFour = {
//   booleanFour: boolean
// }
// type BooleanFive = {
//   booleanFive: boolean
// }
// type BooleanSix = {
//   booleanSix: boolean
// }
// type BooleanSeven = {
//   booleanSeven: boolean
// }
// type BooleanEight = {
//   booleanEight: boolean
// }
// type BooleanNine = {
//   booleanNine: boolean
// }
// type BooleanTen = {
//   booleanTen: boolean
// }

// type ObjOne = {
//   number: number,
//   string: string,
// }
// type ObjTwo = {
//   number: number,
//   string: string,
// }
// type ObjThree = {
//   number: number,
//   string: string,
// }
// type ObjFour = {
//   number: number,
//   string: string,
// }
// type ObjFive = {
//   number: number,
//   string: string,
// }
// type ObjSix = {
//   number: number,
//   string: string,
// }
// type ObjSeven = {
//   number: number,
//   string: string,
// }
// type ObjEight = {
//   number: number,
//   string: string,
// }
// type ObjNine = {
//   number: number,
//   string: string,
// }
// type ObjTen = {
//   number: number,
//   string: string,
// }

// const numbers: Array<number> = [1,2,3,4,5]
// const letters: Array<string> = ['d','f','g','j','r']
// const words: Array<string> = ['hello', 'bye']
// const bigInt: Array<number> = [43523432,6453234,665432,6754]



function calc (a: number, b: number) {
  return Number(a + b)
}

function multiply (a: number, b: number) {
  return Number(a * b)
}

function isEven (a: number) {
  return (typeof a === 'number' ? true : false)
}

function capitalize (a: string) {
  return a.charAt(0).toUpperCase() + a.slice(1)
}

function myArr<T> (myArray: T[]): T[] {
  const reversedArr = myArray.reverse();
  return reversedArr
}

function maxNum (numArr: number[]): number {
  return Math.max(...numArr)
}

function filterStrings<T> (newArr: T[]) {
  return newArr.filter((elem) => typeof elem === 'string')
}

function calculateAverage (numArr: number[]) {
  const numSum = numArr.reduce((acc, value) => acc + value, 0)
  const avg = numSum / numArr.length
  return avg
}

export const ComponentOne = (
  
  // { textOne,
  //   textTwo,
  //   textThree,
  //   textFour,
  //   textFive,
  //   textSix,
  //   textSeven,
  //   textEight,
  //   textNine,
  //   textTen
  // }: AllString
  ) => {
  return ( 
    <>
    
      {/* <p>{textOne}</p>
      <p>{textTwo}</p>
      <p>{textThree}</p>
      <p>{textFour}</p>
      <p>{textFive}</p>
      <p>{textSix}</p>
      <p>{textSeven}</p>
      <p>{textEight}</p>
      <p>{textNine}</p>
      <p>{textTen}</p> */}
    </>
  )
}



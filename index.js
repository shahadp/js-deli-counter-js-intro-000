function takeANumber(katzDeliLine, newPersonInLine)
{
  let newPersonCurrentLine=`Welcome, ${newPersonInLine}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(newPersonInLine);
  console.log(newPersonCurrentLine)
  return newPersonCurrentLine
}

function nowServing(katzDeliLine)
{

}

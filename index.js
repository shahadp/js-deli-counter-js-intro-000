function takeANumber(katzDeliLine, newPersonInLine)
{
  let newPersonCurrentLine=`Welcome, ${newPersonInLine}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(newPersonInLine);
  console.log(newPersonCurrentLine)
  return newPersonCurrentLine
}

function nowServing(katzDeliLine)
{
if (katzDeliLine.length===0)
{
  return 'There is nobody waiting to be served!';
}
else {
  let selectPerson=katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${selectPerson}.`
}
}

function takeANumber(katzDeliLine, new_person_in_line)
{
  let new_person_current_line=`Welcome, ${new_person_in_line}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(new_person_in_line);
  console.log(new_person_current_line)
  return new_person_current_line
}

function nowServing(katzDeliLine)
{
  
}

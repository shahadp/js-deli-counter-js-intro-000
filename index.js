function takeANumber(current_line, new_person_in_line)
{
  let new_person_current_line=`Welcome, ${new_person_in_line}. You are number ${current_line.length+1} in line.`;
  current_line.push(new_person_in_line);
  console.log(new_person_current_line)
  return new_person_current_line
}

const marks=71;
let grade="A";
if (marks>=90) {
    grade="A grade";
}else if (marks>=70&&marks<+90) {
    grade="B grade";
}else if (marks>=50&&marks<70) {
    grade="C grade";
}else{
    grade="F grade";
}
console.log(grade);
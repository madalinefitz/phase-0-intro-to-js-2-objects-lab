// Write your solution in this file!
const employee = {
    name: "Dori",
    streetAddress: "101 Wallabee Way, Sydney"
    };
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{
        ...obj,
        [key]: value,
    };
}
const updatedEmployee = updateEmployeeWithKeyAndValue (
    employee,
    "firstName",
    "Nemo"
);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const updatedEmployeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "firstName", "nemo")
function deleteFromEmployeeByKey(obj, key, value) {
    return{
        ...obj,
        [key]: value,
    };
}
delete updatedEmployee.firstName
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}
delete employee.name
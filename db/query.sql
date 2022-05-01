SELECT department.department_id, role.role_id,employee.manager_id 
AS department
FROM role
JOIN employee
ON  department.department_id = employee.manager_id
ORDER BY role.department_id;
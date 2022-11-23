#set ( $organization_member_usageList = [
{"plan_usage":0.35}
])

#set ( $actualPlannedNum = [{"plan_num": $lead.NumberOfEmployees}])

#set ($percentage = 100.0 * $organization_member_usageList.get(0).plan_usage)

#set ($plannedEmployeeNum = $actualPlannedNum.get(0).plan_num )

## with decimal, e.g. 35.0%
<p>$percentage%</p>
## without decimal e.g. 35%
<p>$percentage.intValue()%</p>

<p>Planned Actual Number of Employees: $plannedEmployeeNum of $lead.NumberOfEmployees</p>
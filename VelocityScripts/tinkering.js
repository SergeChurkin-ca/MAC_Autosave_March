## $lead.Country
#if ($lead.Country.equals("CN"))
    #set ($billingCountry = "Billing Country: ${lead.Country}")
    #elseif ($lead.Country.equals("United States"))
    #set ($billingCountry = "Non Billing Country: ${lead.Country}")
#else (!$lead.Country.equals("1"))
    #set($billingCountry = "Nothing here, did you add the country?")
#end
<p>${billingCountry}</p>

#if (${lead.Title} == "student") || ${lead.Title} == "Student"
#set (<style>.main {display:none;}</style>)
#end
## $lead.Country
#if ($lead.Country.equals("CN"))
#set ($billingCountry = "Billing Country: ${lead.Country}")
#elseif ($lead.Country.equals("United States"))
#set ($billingCountry = "Non Billing Country: ${lead.Country}")
#else (!$lead.Country.equals("1"))
#set($billingCountry = "Nothing here, did you add the country?")
#end
<p>${billingCountry}</p>

#if ($lead.Title.equals("student") || $lead.Title.equals("Student"))
<table cellspacing="0" cellpadding="0" border="0" align="left">
    <tbody>
        <tr>
            <td
                style="text-align: center; text-decoration:none; font-size:18px;font-weight:bold; line-height:135%; font-family: 'Work Sans',Arial, sans-serif; border:1px solid #ffffff; background-color:#5c5c5c; border-radius: 10px;padding:5px;">
                <a
                    style="min-height:10px; text-decoration:none; color:#ffffff; padding: 9px 30px; display:inline-block"
                    href="#">Conditional CTA</a>
            </td>
        </tr>
    </tbody>
</table>
#end
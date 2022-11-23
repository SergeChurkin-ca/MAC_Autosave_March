## by default set qualifiedCompany to first company in list
#set( $qualifiedCompany = $lead.Companies[0] )
## loop through each company
#foreach( $company in $lead.Companies )
    ## if current loop's company has more employees, update qualifiedCompany
    #if($company.numEmployees > $qualifiedCompany.numEmployees)
        #set( $qualifiedCompany = $company )
    #end
#end

## display promotion based on matched company name
#if( $qualifiedCompany == "Google" )
    Google Selected
#elseif( $qualifiedCompany == "Meta" )
  Meta Selected
#else
  You are not qualified
#end




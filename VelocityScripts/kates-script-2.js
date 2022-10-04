########### START testing
#if ( !$organization_member_generalList )
	## all matches
	#set ( $organization_member_generalList = [
		{"project_platform":"javascript"},
		{"project_platform":"python"},
		{"project_platform":"cocoa"},
		{"project_platform":"android"},
		{"project_platform":"capacitor"},
		{"project_platform":".net"},
		{"project_platform":"react native"},
		{"project_platform":"OTHER_EXAMPLE"}
	])

	## 1 match
	## #set ( $organization_member_generalList = [{"project_platform":"javascript"}] )

	## 0 matches
	## #set ( $organization_member_generalList = [] )
#end
########### END testing

#set($numMatches = 0)
## get a count of how many matched platforms we have
#foreach( $org in $organization_member_generalList)
	#if ($org.project_platform.contains("javascript") ||
	$org.project_platform.contains("python") ||
	$org.project_platform.contains("cocoa") ||
	$org.project_platform.contains("android") ||
	$org.project_platform.contains("capacitor") || 
	$org.project_platform.contains(".net") ||
	$org.project_platform.contains("react native"))
	#set($numMatches = $numMatches + 1)
  #end
#end

## if more than one match, create <ul>
#if ($numMatches > 1)<ul style="margin:0;padding:0;">#end

## loop through and process expected platforms
#foreach( $org in $organization_member_generalList)
  #if ($org.project_platform.contains("javascript") ||
  $org.project_platform.contains("python") ||
  $org.project_platform.contains("cocoa") ||
  $org.project_platform.contains("android") ||
  $org.project_platform.contains("capacitor") || 
  $org.project_platform.contains(".net") ||
  $org.project_platform.contains("react native"))
  
	## if more than one match, create <li>
	#if ($numMatches > 1)<li style="margin:0;padding:0;">#end
	
	#if ($org.project_platform.contains("node"))
		<a href="https://docs.sentry.io/platforms/node">node</a>
	#elseif ($org.project_platform.contains("capacitor"))
		<a href="https://docs.sentry.io/platforms/capacitor">capacitor</a>
	#elseif ($org.project_platform.contains(".net"))
		<a href="https://docs.sentry.io/platforms/dotnet">.net</a>
	#elseif ($org.project_platform.contains("react native"))
		<a href="https://docs.sentry.io/platforms/react-native">react native</a>
	#elseif ($org.project_platform.contains("python"))
		<a href="https://docs.sentry.io/platforms/python">python</a>
	#elseif ($org.project_platform.contains("cocoa"))
		<a href="https://docs.sentry.io/platforms/cocoa">cocoa</a>
	#elseif ($org.project_platform.contains("android"))
		<a href="https://docs.sentry.io/platforms/android">android</a>
	#elseif($org.project_platform.contains("javascript"))
		<a href="https://docs.sentry.io/platforms/javascript">javascript</a>
	#end

	## if more than one match, close <li>
	#if ($numMatches > 1)</li>#end

  ## end platform check
  #end 
## end loop
#end

## if more than one match, close <ul>
#if ($numMatches > 1)</ul>#end

## fallback - no matches
#if ($numMatches == 0)
	<a href="https://docs.sentry.io/platforms/">SDK Docs</a>
	<br>
#end

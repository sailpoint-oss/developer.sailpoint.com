# BrandingItem

# BrandingItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | name of branding item | [optional] 
**ProductName** | **String** | product name | [optional] 
**ActionButtonColor** | **String** | hex value of color for action button | [optional] 
**DarkActionButtonColor** | **String** | hex value of color for action button in dark mode | [optional] 
**ActiveLinkColor** | **String** | hex value of color for link | [optional] 
**DarkActiveLinkColor** | **String** | hex value of color for link in dark mode | [optional] 
**NavigationColor** | **String** | hex value of color for navigation bar | [optional] 
**DarkNavigationColor** | **String** | hex value of color for navigation bar in dark mode | [optional] 
**EmailFromAddress** | **String** | email from address | [optional] 
**StandardLogoURL** | **String** | url to standard logo | [optional] 
**DarkStandardLogoURL** | **String** | url to dark-mode logo | [optional] 
**LoginInformationalMessage** | **String** | login information message | [optional] 

## Examples

- Prepare the resource
```powershell
$BrandingItem = Initialize-BrandingItem  -Name default `
 -ProductName product name `
 -ActionButtonColor 0074D9 `
 -DarkActionButtonColor 0074D9 `
 -ActiveLinkColor 011E69 `
 -DarkActiveLinkColor 011E69 `
 -NavigationColor 011E69 `
 -DarkNavigationColor 011E69 `
 -EmailFromAddress no-reply@sailpoint.com `
 -StandardLogoURL https://example.identitynow.com/logos/standard.png `
 -DarkStandardLogoURL https://example.identitynow.com/logos/dark.png `
 -LoginInformationalMessage 
```

- Convert the resource to JSON
```powershell
$BrandingItem | ConvertTo-JSON
```


[[Back to top]](#) 


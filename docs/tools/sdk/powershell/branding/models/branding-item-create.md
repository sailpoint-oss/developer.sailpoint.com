# BrandingItemCreate

# BrandingItemCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | name of branding item | [required]
**ProductName** | **String** | product name | [required]
**ActionButtonColor** | **String** | hex value of color for action button | [optional] 
**DarkActionButtonColor** | **String** | hex value of color for action button in dark mode | [optional] 
**ActiveLinkColor** | **String** | hex value of color for link | [optional] 
**DarkActiveLinkColor** | **String** | hex value of color for link in dark mode | [optional] 
**NavigationColor** | **String** | hex value of color for navigation bar | [optional] 
**DarkNavigationColor** | **String** | hex value of color for navigation bar in dark mode | [optional] 
**EmailFromAddress** | **String** | email from address | [optional] 
**LoginInformationalMessage** | **String** | login information message | [optional] 
**FileStandard** | **System.IO.FileInfo** | png file with logo. To remove an existing logo, delete the branding item and create it again. Omitting this field on update keeps the current logo. | [optional] 
**DarkFileStandard** | **System.IO.FileInfo** | png file with dark-mode logo. To remove an existing dark-mode logo, delete the branding item and create it again. Omitting this field on update keeps the current dark-mode logo. | [optional] 

## Examples

- Prepare the resource
```powershell
$BrandingItemCreate = Initialize-BrandingItemCreate  -Name custom-branding-item `
 -ProductName product name `
 -ActionButtonColor 0074D9 `
 -DarkActionButtonColor 0074D9 `
 -ActiveLinkColor 011E69 `
 -DarkActiveLinkColor 011E69 `
 -NavigationColor 011E69 `
 -DarkNavigationColor 011E69 `
 -EmailFromAddress no-reply@sailpoint.com `
 -LoginInformationalMessage  `
 -FileStandard [B@88d6f9b `
 -DarkFileStandard [B@47d93e0d
```

- Convert the resource to JSON
```powershell
$BrandingItemCreate | ConvertTo-JSON
```


[[Back to top]](#) 


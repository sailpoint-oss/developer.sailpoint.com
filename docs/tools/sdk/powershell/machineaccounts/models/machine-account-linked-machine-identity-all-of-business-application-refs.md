# MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs

# MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "BUSINESS_APPLICATION" ] | The reference type. | [optional] 
**Id** | **String** | ID of the business application. | [optional] 
**Name** | **String** | The display name of the business application. | [optional] 
**SanctionedStatus** |  **Enum** [  "SANCTIONED",    "UNSANCTIONED",    "UNKNOWN" ] | The sanctioned status of the business application. | [optional] 
**CorrelationType** |  **Enum** [  "MANUAL",    "AUTOMATIC" ] | How the business application was linked to the machine identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs = Initialize-MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs  -Type BUSINESS_APPLICATION `
 -Id 2ee5e239-e68c-4d69-93fb-6c7ce4576190 `
 -Name Cursor `
 -SanctionedStatus SANCTIONED `
 -CorrelationType MANUAL
```

- Convert the resource to JSON
```powershell
$MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs | ConvertTo-JSON
```


[[Back to top]](#) 


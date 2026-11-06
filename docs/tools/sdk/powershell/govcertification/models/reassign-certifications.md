# ReassignCertifications

# ReassignCertifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | **[]String** | List of certification IDs to reassign | [required]
**ReassignTo** | [**ReassignCertificationsReassignTo**](reassign-certifications-reassign-to) |  | [required]
**Reason** | **String** | Comment to explain why the certification was reassigned | [required]

## Examples

- Prepare the resource
```powershell
$ReassignCertifications = Initialize-ReassignCertifications  -CertificationIds ["af385946-4779-4712-91bb-8424a563abc1","af385946-4779-4712-91bb-8424a563abc2","af385946-4779-4712-91bb-8424a563abc3"] `
 -ReassignTo null `
 -Reason Reassigning the certifications
```

- Convert the resource to JSON
```powershell
$ReassignCertifications | ConvertTo-JSON
```


[[Back to top]](#) 


# CertificationSubjectSummary

# CertificationSubjectSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubjectType** |  **Enum** [  "IDENTITY",    "MACHINE_IDENTITY",    "ROLE" ] | The type of subject being targeted by this certification | [optional] 
**Id** | **String** | The subject id | [optional] 
**SubjectName** | **String** | Name of the target subject | [optional] 
**SubjectTargetId** | **String** | The ID of the entity being targeted by a certification | [optional] 
**Completed** | **Boolean** | Indicates whether the review items for the linked subject's certification have been completed | [optional] [default to $false]
**SubjectEmail** | **String** | Email of the subject | [optional] 
**SubjectManagerName** | **String** | The name of the subject's manager | [optional] 
**IdentityState** |  **Enum** [  "ACTIVE",    "INACTIVE_LONG_TERM",    "INACTIVE_SHORT_TERM" ] | The state of identity/subject | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationSubjectSummary = Initialize-CertificationSubjectSummary  -SubjectType IDENTITY `
 -Id 10dcb487-fd0d-44a1-8338-e48e7b9caf61 `
 -SubjectName Alison Ferguson `
 -SubjectTargetId 2c9180857182306001719937377a33de `
 -Completed false `
 -SubjectEmail Alison.Ferguson@email.com `
 -SubjectManagerName Bobby Boss `
 -IdentityState ACTIVE
```

- Convert the resource to JSON
```powershell
$CertificationSubjectSummary | ConvertTo-JSON
```


[[Back to top]](#) 


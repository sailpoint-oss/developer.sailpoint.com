# CertificationReviewer

# CertificationReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Identity or Governance Group | [optional] 
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Type of the reviewer | [optional] 
**Name** | **String** | Human-readable display name of the Identity or Governance Group | [optional] 
**Email** | **String** | The email of the Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationReviewer = Initialize-CertificationReviewer  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type IDENTITY `
 -Name William Wilson `
 -Email William.Wilson@email.com
```

- Convert the resource to JSON
```powershell
$CertificationReviewer | ConvertTo-JSON
```


[[Back to top]](#) 


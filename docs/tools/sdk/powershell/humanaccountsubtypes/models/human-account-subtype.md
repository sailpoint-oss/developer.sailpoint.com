# HumanAccountSubtype

# HumanAccountSubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the subtype. | [optional] [readonly] 
**SourceId** | **String** | The ID of the source the subtype belongs to. | [optional] [readonly] 
**TechnicalName** | **String** | Technical name of the subtype. | [optional] 
**DisplayName** | **String** | Display name of the subtype. | [optional] 
**Description** | **String** | Description of the subtype. | [optional] 
**EntityType** | **String** | Entity type the subtype applies to. Human account subtypes apply to accounts. | [optional] [readonly] 
**Default** | **Boolean** | Whether this subtype is the default human account subtype of the source. | [optional] [default to $false]
**SystemManaged** | **Boolean** | Indicates if the subtype is managed by the system. Read-only. | [optional] [readonly] [default to $false]
**Created** | **System.DateTime** | Creation timestamp. | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modified timestamp. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$HumanAccountSubtype = Initialize-HumanAccountSubtype  -Id 38453251-6be2-5f8f-df93-5ce19e295838 `
 -SourceId 6d0458373bec4b4b80460992b76016da `
 -TechnicalName contractor `
 -DisplayName Contractor `
 -Description Contractors with a limited account lifecycle `
 -EntityType ACCOUNT `
 -Default false `
 -SystemManaged false `
 -Created 2026-11-20T10:15:30.123Z `
 -Modified 2026-11-20T10:15:30.123Z
```

- Convert the resource to JSON
```powershell
$HumanAccountSubtype | ConvertTo-JSON
```


[[Back to top]](#) 


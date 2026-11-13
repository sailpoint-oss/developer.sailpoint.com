# DecisionStatistics

# DecisionStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Int32** | Count of approval decisions for this item type. | [optional] 
**Revoked** | **Int32** | Count of revoke decisions for this item type. | [optional] 
**Acknowledged** | **Int32** | Count of acknowledge decisions for this item type. | [optional] 
**DecisionsMade** | **Int32** | Count of decisions made so far for this item type. | [optional] 
**DecisionsTotal** | **Int32** | Count of all decisions for this item type, both made and yet-to-be-made. | [optional] 

## Examples

- Prepare the resource
```powershell
$DecisionStatistics = Initialize-DecisionStatistics  -Approved 42 `
 -Revoked 7 `
 -Acknowledged 15 `
 -DecisionsMade 64 `
 -DecisionsTotal 100
```

- Convert the resource to JSON
```powershell
$DecisionStatistics | ConvertTo-JSON
```


[[Back to top]](#) 


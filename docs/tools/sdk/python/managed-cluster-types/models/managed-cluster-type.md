# ManagedClusterType

# ManagedClusterType

Managed Cluster Type for Cluster upgrade configuration information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ManagedClusterType ID | [optional] [readonly] 
**type** | **str** | ManagedClusterType type name | [required]
**pod** | **str** | ManagedClusterType pod | [required]
**org** | **str** | ManagedClusterType org | [required]
**managed_process_ids** | **[]str** | List of processes for the cluster type | [optional] 
\}

## Example

```python
from sailpoint.managed_cluster_types.models.managed_cluster_type import ManagedClusterType

managed_cluster_type = ManagedClusterType(
id='aClusterTypeId',
type='idn',
pod='megapod-useast1',
org='denali-cjh',
managed_process_ids=["someId","someId2"]
)

```
[[Back to top]](#) 


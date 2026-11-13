# ManagedClusterEncryptionConfig

# ManagedClusterEncryptionConfig

Defines the encryption settings for a managed cluster, including the format used for storing and processing encrypted data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** |  **Enum** [  'V2',    'V3' ] | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.managed_cluster_encryption_config import ManagedClusterEncryptionConfig

managed_cluster_encryption_config = ManagedClusterEncryptionConfig(
format='V3'
)

```
[[Back to top]](#) 


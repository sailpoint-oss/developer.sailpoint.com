# ManagedClusterKeyPair

# ManagedClusterKeyPair

Managed Cluster key pair for Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | ManagedCluster publicKey | [optional] 
**public_key_thumbprint** | **str** | ManagedCluster publicKeyThumbprint | [optional] 
**public_key_certificate** | **str** | ManagedCluster publicKeyCertificate | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.managed_cluster_key_pair import ManagedClusterKeyPair

managed_cluster_key_pair = ManagedClusterKeyPair(
public_key='-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----',
public_key_thumbprint='6CMlaJIV44-xJxcB3CJBjDUUn54',
public_key_certificate='-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----'
)

```
[[Back to top]](#) 


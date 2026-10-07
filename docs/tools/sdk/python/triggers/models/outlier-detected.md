# OutlierDetected

# OutlierDetected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**OutlierDetectedIdentity**](outlier-detected-identity) |  | [required]
**outlier_type** |  **Enum** [  'LOW_SIMILARITY' ] | Identity's outlier type. | [required]
**score** | **float** | Dissimilarity score that determines whether the identity is an outlier, ranging from `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier. | [required]
\}

## Example

```python
from sailpoint.triggers.models.outlier_detected import OutlierDetected

outlier_detected = OutlierDetected(
identity=sailpoint.triggers.models.outlier_detected_identity.OutlierDetected_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
outlier_type='LOW_SIMILARITY',
score=0.82
)

```
[[Back to top]](#) 


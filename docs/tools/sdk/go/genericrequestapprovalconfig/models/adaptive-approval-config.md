# AdaptiveApprovalConfig

# AdaptiveApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** | **string** | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | 
**WorkflowId** | **string** | Identifier of the platform workflow that decides the request. | 

## Methods

### NewAdaptiveApprovalConfig

`func NewAdaptiveApprovalConfig(scheme string, workflowId string, ) *AdaptiveApprovalConfig`

NewAdaptiveApprovalConfig instantiates a new AdaptiveApprovalConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdaptiveApprovalConfigWithDefaults

`func NewAdaptiveApprovalConfigWithDefaults() *AdaptiveApprovalConfig`

NewAdaptiveApprovalConfigWithDefaults instantiates a new AdaptiveApprovalConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheme

`func (o *AdaptiveApprovalConfig) GetScheme() string`

GetScheme returns the Scheme field if non-nil, zero value otherwise.

### GetSchemeOk

`func (o *AdaptiveApprovalConfig) GetSchemeOk() (*string, bool)`

GetSchemeOk returns a tuple with the Scheme field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheme

`func (o *AdaptiveApprovalConfig) SetScheme(v string)`

SetScheme sets Scheme field to given value.


### GetWorkflowId

`func (o *AdaptiveApprovalConfig) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *AdaptiveApprovalConfig) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *AdaptiveApprovalConfig) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.




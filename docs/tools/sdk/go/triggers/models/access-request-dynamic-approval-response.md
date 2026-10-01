# AccessRequestDynamicApprovalResponse

# AccessRequestDynamicApprovalResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier of the approver to add to the approval process. If there is none, send an empty value \"\". | 
**Type** | **string** | Type of approver to add to the approval process. If there is none, send an empty value \"\". | 
**Name** | **string** | Name of the approver to add to the approval process. If there is none, send an empty value \"\". | 

## Methods

### NewAccessRequestDynamicApprovalResponse

`func NewAccessRequestDynamicApprovalResponse(id string, type_ string, name string, ) *AccessRequestDynamicApprovalResponse`

NewAccessRequestDynamicApprovalResponse instantiates a new AccessRequestDynamicApprovalResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestDynamicApprovalResponseWithDefaults

`func NewAccessRequestDynamicApprovalResponseWithDefaults() *AccessRequestDynamicApprovalResponse`

NewAccessRequestDynamicApprovalResponseWithDefaults instantiates a new AccessRequestDynamicApprovalResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestDynamicApprovalResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestDynamicApprovalResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestDynamicApprovalResponse) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *AccessRequestDynamicApprovalResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestDynamicApprovalResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestDynamicApprovalResponse) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *AccessRequestDynamicApprovalResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestDynamicApprovalResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestDynamicApprovalResponse) SetName(v string)`

SetName sets Name field to given value.




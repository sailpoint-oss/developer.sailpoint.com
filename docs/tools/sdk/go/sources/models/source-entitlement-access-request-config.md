# SourceEntitlementAccessRequestConfig

# SourceEntitlementAccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]SourceEntitlementApprovalScheme**](source-entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | Pointer to **bool** | If the requester must provide a comment during access request. | [optional] [default to false]
**DenialCommentRequired** | Pointer to **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **bool** | Is Reauthorization Required | [optional] [default to false]
**RequireEndDate** | Pointer to **bool** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to false]
**MaxPermittedAccessDuration** | Pointer to [**NullableSourceEntitlementAccessRequestConfigMaxPermittedAccessDuration**](source-entitlement-access-request-config-max-permitted-access-duration) |  | [optional] 
**FormDefinitionId** | Pointer to **NullableString** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 

## Methods

### NewSourceEntitlementAccessRequestConfig

`func NewSourceEntitlementAccessRequestConfig() *SourceEntitlementAccessRequestConfig`

NewSourceEntitlementAccessRequestConfig instantiates a new SourceEntitlementAccessRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceEntitlementAccessRequestConfigWithDefaults

`func NewSourceEntitlementAccessRequestConfigWithDefaults() *SourceEntitlementAccessRequestConfig`

NewSourceEntitlementAccessRequestConfigWithDefaults instantiates a new SourceEntitlementAccessRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *SourceEntitlementAccessRequestConfig) GetApprovalSchemes() []SourceEntitlementApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *SourceEntitlementAccessRequestConfig) GetApprovalSchemesOk() (*[]SourceEntitlementApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *SourceEntitlementAccessRequestConfig) SetApprovalSchemes(v []SourceEntitlementApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *SourceEntitlementAccessRequestConfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetRequestCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) GetRequestCommentRequired() bool`

GetRequestCommentRequired returns the RequestCommentRequired field if non-nil, zero value otherwise.

### GetRequestCommentRequiredOk

`func (o *SourceEntitlementAccessRequestConfig) GetRequestCommentRequiredOk() (*bool, bool)`

GetRequestCommentRequiredOk returns a tuple with the RequestCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) SetRequestCommentRequired(v bool)`

SetRequestCommentRequired sets RequestCommentRequired field to given value.

### HasRequestCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) HasRequestCommentRequired() bool`

HasRequestCommentRequired returns a boolean if a field has been set.

### GetDenialCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) GetDenialCommentRequired() bool`

GetDenialCommentRequired returns the DenialCommentRequired field if non-nil, zero value otherwise.

### GetDenialCommentRequiredOk

`func (o *SourceEntitlementAccessRequestConfig) GetDenialCommentRequiredOk() (*bool, bool)`

GetDenialCommentRequiredOk returns a tuple with the DenialCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) SetDenialCommentRequired(v bool)`

SetDenialCommentRequired sets DenialCommentRequired field to given value.

### HasDenialCommentRequired

`func (o *SourceEntitlementAccessRequestConfig) HasDenialCommentRequired() bool`

HasDenialCommentRequired returns a boolean if a field has been set.

### GetReauthorizationRequired

`func (o *SourceEntitlementAccessRequestConfig) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *SourceEntitlementAccessRequestConfig) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *SourceEntitlementAccessRequestConfig) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *SourceEntitlementAccessRequestConfig) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### GetRequireEndDate

`func (o *SourceEntitlementAccessRequestConfig) GetRequireEndDate() bool`

GetRequireEndDate returns the RequireEndDate field if non-nil, zero value otherwise.

### GetRequireEndDateOk

`func (o *SourceEntitlementAccessRequestConfig) GetRequireEndDateOk() (*bool, bool)`

GetRequireEndDateOk returns a tuple with the RequireEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireEndDate

`func (o *SourceEntitlementAccessRequestConfig) SetRequireEndDate(v bool)`

SetRequireEndDate sets RequireEndDate field to given value.

### HasRequireEndDate

`func (o *SourceEntitlementAccessRequestConfig) HasRequireEndDate() bool`

HasRequireEndDate returns a boolean if a field has been set.

### GetMaxPermittedAccessDuration

`func (o *SourceEntitlementAccessRequestConfig) GetMaxPermittedAccessDuration() SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *SourceEntitlementAccessRequestConfig) GetMaxPermittedAccessDurationOk() (*SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *SourceEntitlementAccessRequestConfig) SetMaxPermittedAccessDuration(v SourceEntitlementAccessRequestConfigMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *SourceEntitlementAccessRequestConfig) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *SourceEntitlementAccessRequestConfig) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *SourceEntitlementAccessRequestConfig) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil
### GetFormDefinitionId

`func (o *SourceEntitlementAccessRequestConfig) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *SourceEntitlementAccessRequestConfig) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *SourceEntitlementAccessRequestConfig) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *SourceEntitlementAccessRequestConfig) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *SourceEntitlementAccessRequestConfig) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *SourceEntitlementAccessRequestConfig) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil


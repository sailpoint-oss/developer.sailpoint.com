# JitActivationCallerMetadata

# JitActivationCallerMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Request origin type. Matches `requestOrigin` when both are sent. | [optional] 
**SlackUserId** | Pointer to **string** | Slack user identifier of the caller. | [optional] 
**CommandText** | Pointer to **string** | Slack command text that produced this request. | [optional] 
**ChannelId** | Pointer to **string** | Slack channel identifier. | [optional] 
**ThreadId** | Pointer to **string** | Slack thread identifier of the message that produced this request. | [optional] 
**MessageId** | Pointer to **string** | Slack message identifier of the message that produced this request. | [optional] 
**WorkspaceId** | Pointer to **string** | Slack workspace identifier. | [optional] 

## Methods

### NewJitActivationCallerMetadata

`func NewJitActivationCallerMetadata() *JitActivationCallerMetadata`

NewJitActivationCallerMetadata instantiates a new JitActivationCallerMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationCallerMetadataWithDefaults

`func NewJitActivationCallerMetadataWithDefaults() *JitActivationCallerMetadata`

NewJitActivationCallerMetadataWithDefaults instantiates a new JitActivationCallerMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *JitActivationCallerMetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *JitActivationCallerMetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *JitActivationCallerMetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *JitActivationCallerMetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSlackUserId

`func (o *JitActivationCallerMetadata) GetSlackUserId() string`

GetSlackUserId returns the SlackUserId field if non-nil, zero value otherwise.

### GetSlackUserIdOk

`func (o *JitActivationCallerMetadata) GetSlackUserIdOk() (*string, bool)`

GetSlackUserIdOk returns a tuple with the SlackUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackUserId

`func (o *JitActivationCallerMetadata) SetSlackUserId(v string)`

SetSlackUserId sets SlackUserId field to given value.

### HasSlackUserId

`func (o *JitActivationCallerMetadata) HasSlackUserId() bool`

HasSlackUserId returns a boolean if a field has been set.

### GetCommandText

`func (o *JitActivationCallerMetadata) GetCommandText() string`

GetCommandText returns the CommandText field if non-nil, zero value otherwise.

### GetCommandTextOk

`func (o *JitActivationCallerMetadata) GetCommandTextOk() (*string, bool)`

GetCommandTextOk returns a tuple with the CommandText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommandText

`func (o *JitActivationCallerMetadata) SetCommandText(v string)`

SetCommandText sets CommandText field to given value.

### HasCommandText

`func (o *JitActivationCallerMetadata) HasCommandText() bool`

HasCommandText returns a boolean if a field has been set.

### GetChannelId

`func (o *JitActivationCallerMetadata) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *JitActivationCallerMetadata) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *JitActivationCallerMetadata) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.

### HasChannelId

`func (o *JitActivationCallerMetadata) HasChannelId() bool`

HasChannelId returns a boolean if a field has been set.

### GetThreadId

`func (o *JitActivationCallerMetadata) GetThreadId() string`

GetThreadId returns the ThreadId field if non-nil, zero value otherwise.

### GetThreadIdOk

`func (o *JitActivationCallerMetadata) GetThreadIdOk() (*string, bool)`

GetThreadIdOk returns a tuple with the ThreadId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreadId

`func (o *JitActivationCallerMetadata) SetThreadId(v string)`

SetThreadId sets ThreadId field to given value.

### HasThreadId

`func (o *JitActivationCallerMetadata) HasThreadId() bool`

HasThreadId returns a boolean if a field has been set.

### GetMessageId

`func (o *JitActivationCallerMetadata) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *JitActivationCallerMetadata) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *JitActivationCallerMetadata) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *JitActivationCallerMetadata) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *JitActivationCallerMetadata) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *JitActivationCallerMetadata) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *JitActivationCallerMetadata) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.

### HasWorkspaceId

`func (o *JitActivationCallerMetadata) HasWorkspaceId() bool`

HasWorkspaceId returns a boolean if a field has been set.



# SourceAgentDeletionTaskStatus

# SourceAgentDeletionTaskStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the deletion task. | [optional] 
**Type** | Pointer to **string** | Type of the deletion task. | [optional] 
**UniqueName** | Pointer to **string** | Name of the deletion task. | [optional] 
**Description** | Pointer to **string** | Description of the deletion task. | [optional] 
**ParentName** | Pointer to **NullableString** | Name of the parent of the deletion task. | [optional] 
**Launcher** | Pointer to **string** | Service or user that launched the deletion task. | [optional] 
**Target** | Pointer to [**SourceAgentDeletionTaskStatusTarget**](source-agent-deletion-task-status-target) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of the deletion task. | [optional] 
**Modified** | Pointer to **NullableTime** | Last modification date of the deletion task. | [optional] 
**Launched** | Pointer to **NullableTime** | Launch date of the deletion task. | [optional] 
**Completed** | Pointer to **NullableTime** | Completion date of the deletion task. `null` until the task finishes. | [optional] 
**TaskDefinitionSummary** | Pointer to [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**CompletionStatus** | Pointer to **NullableString** | Completion status of the deletion task. `null` until the task finishes. | [optional] 
**Messages** | Pointer to [**[]TaskStatusMessage**](task-status-message) | Messages associated with the deletion task. | [optional] 
**Returns** | Pointer to [**[]TaskReturnDetails**](task-return-details) | Return values from the deletion task. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | Attributes of the deletion task. | [optional] 
**Progress** | Pointer to **NullableString** | Current progress of the deletion task. | [optional] 
**PercentComplete** | Pointer to **int32** | Current percentage completion of the deletion task. | [optional] 

## Methods

### NewSourceAgentDeletionTaskStatus

`func NewSourceAgentDeletionTaskStatus() *SourceAgentDeletionTaskStatus`

NewSourceAgentDeletionTaskStatus instantiates a new SourceAgentDeletionTaskStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAgentDeletionTaskStatusWithDefaults

`func NewSourceAgentDeletionTaskStatusWithDefaults() *SourceAgentDeletionTaskStatus`

NewSourceAgentDeletionTaskStatusWithDefaults instantiates a new SourceAgentDeletionTaskStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceAgentDeletionTaskStatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAgentDeletionTaskStatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAgentDeletionTaskStatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAgentDeletionTaskStatus) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SourceAgentDeletionTaskStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAgentDeletionTaskStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAgentDeletionTaskStatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAgentDeletionTaskStatus) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *SourceAgentDeletionTaskStatus) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *SourceAgentDeletionTaskStatus) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *SourceAgentDeletionTaskStatus) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *SourceAgentDeletionTaskStatus) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *SourceAgentDeletionTaskStatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceAgentDeletionTaskStatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceAgentDeletionTaskStatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceAgentDeletionTaskStatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetParentName

`func (o *SourceAgentDeletionTaskStatus) GetParentName() string`

GetParentName returns the ParentName field if non-nil, zero value otherwise.

### GetParentNameOk

`func (o *SourceAgentDeletionTaskStatus) GetParentNameOk() (*string, bool)`

GetParentNameOk returns a tuple with the ParentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentName

`func (o *SourceAgentDeletionTaskStatus) SetParentName(v string)`

SetParentName sets ParentName field to given value.

### HasParentName

`func (o *SourceAgentDeletionTaskStatus) HasParentName() bool`

HasParentName returns a boolean if a field has been set.

### SetParentNameNil

`func (o *SourceAgentDeletionTaskStatus) SetParentNameNil(b bool)`

 SetParentNameNil sets the value for ParentName to be an explicit nil

### UnsetParentName
`func (o *SourceAgentDeletionTaskStatus) UnsetParentName()`

UnsetParentName ensures that no value is present for ParentName, not even an explicit nil
### GetLauncher

`func (o *SourceAgentDeletionTaskStatus) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *SourceAgentDeletionTaskStatus) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *SourceAgentDeletionTaskStatus) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *SourceAgentDeletionTaskStatus) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetTarget

`func (o *SourceAgentDeletionTaskStatus) GetTarget() SourceAgentDeletionTaskStatusTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SourceAgentDeletionTaskStatus) GetTargetOk() (*SourceAgentDeletionTaskStatusTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SourceAgentDeletionTaskStatus) SetTarget(v SourceAgentDeletionTaskStatusTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SourceAgentDeletionTaskStatus) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetCreated

`func (o *SourceAgentDeletionTaskStatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceAgentDeletionTaskStatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceAgentDeletionTaskStatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceAgentDeletionTaskStatus) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceAgentDeletionTaskStatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceAgentDeletionTaskStatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceAgentDeletionTaskStatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceAgentDeletionTaskStatus) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SourceAgentDeletionTaskStatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SourceAgentDeletionTaskStatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetLaunched

`func (o *SourceAgentDeletionTaskStatus) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *SourceAgentDeletionTaskStatus) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *SourceAgentDeletionTaskStatus) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *SourceAgentDeletionTaskStatus) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### SetLaunchedNil

`func (o *SourceAgentDeletionTaskStatus) SetLaunchedNil(b bool)`

 SetLaunchedNil sets the value for Launched to be an explicit nil

### UnsetLaunched
`func (o *SourceAgentDeletionTaskStatus) UnsetLaunched()`

UnsetLaunched ensures that no value is present for Launched, not even an explicit nil
### GetCompleted

`func (o *SourceAgentDeletionTaskStatus) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *SourceAgentDeletionTaskStatus) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *SourceAgentDeletionTaskStatus) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *SourceAgentDeletionTaskStatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### SetCompletedNil

`func (o *SourceAgentDeletionTaskStatus) SetCompletedNil(b bool)`

 SetCompletedNil sets the value for Completed to be an explicit nil

### UnsetCompleted
`func (o *SourceAgentDeletionTaskStatus) UnsetCompleted()`

UnsetCompleted ensures that no value is present for Completed, not even an explicit nil
### GetTaskDefinitionSummary

`func (o *SourceAgentDeletionTaskStatus) GetTaskDefinitionSummary() TaskDefinitionSummary`

GetTaskDefinitionSummary returns the TaskDefinitionSummary field if non-nil, zero value otherwise.

### GetTaskDefinitionSummaryOk

`func (o *SourceAgentDeletionTaskStatus) GetTaskDefinitionSummaryOk() (*TaskDefinitionSummary, bool)`

GetTaskDefinitionSummaryOk returns a tuple with the TaskDefinitionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDefinitionSummary

`func (o *SourceAgentDeletionTaskStatus) SetTaskDefinitionSummary(v TaskDefinitionSummary)`

SetTaskDefinitionSummary sets TaskDefinitionSummary field to given value.

### HasTaskDefinitionSummary

`func (o *SourceAgentDeletionTaskStatus) HasTaskDefinitionSummary() bool`

HasTaskDefinitionSummary returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *SourceAgentDeletionTaskStatus) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *SourceAgentDeletionTaskStatus) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *SourceAgentDeletionTaskStatus) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *SourceAgentDeletionTaskStatus) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.

### SetCompletionStatusNil

`func (o *SourceAgentDeletionTaskStatus) SetCompletionStatusNil(b bool)`

 SetCompletionStatusNil sets the value for CompletionStatus to be an explicit nil

### UnsetCompletionStatus
`func (o *SourceAgentDeletionTaskStatus) UnsetCompletionStatus()`

UnsetCompletionStatus ensures that no value is present for CompletionStatus, not even an explicit nil
### GetMessages

`func (o *SourceAgentDeletionTaskStatus) GetMessages() []TaskStatusMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *SourceAgentDeletionTaskStatus) GetMessagesOk() (*[]TaskStatusMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *SourceAgentDeletionTaskStatus) SetMessages(v []TaskStatusMessage)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *SourceAgentDeletionTaskStatus) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetReturns

`func (o *SourceAgentDeletionTaskStatus) GetReturns() []TaskReturnDetails`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *SourceAgentDeletionTaskStatus) GetReturnsOk() (*[]TaskReturnDetails, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *SourceAgentDeletionTaskStatus) SetReturns(v []TaskReturnDetails)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *SourceAgentDeletionTaskStatus) HasReturns() bool`

HasReturns returns a boolean if a field has been set.

### GetAttributes

`func (o *SourceAgentDeletionTaskStatus) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SourceAgentDeletionTaskStatus) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SourceAgentDeletionTaskStatus) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *SourceAgentDeletionTaskStatus) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetProgress

`func (o *SourceAgentDeletionTaskStatus) GetProgress() string`

GetProgress returns the Progress field if non-nil, zero value otherwise.

### GetProgressOk

`func (o *SourceAgentDeletionTaskStatus) GetProgressOk() (*string, bool)`

GetProgressOk returns a tuple with the Progress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgress

`func (o *SourceAgentDeletionTaskStatus) SetProgress(v string)`

SetProgress sets Progress field to given value.

### HasProgress

`func (o *SourceAgentDeletionTaskStatus) HasProgress() bool`

HasProgress returns a boolean if a field has been set.

### SetProgressNil

`func (o *SourceAgentDeletionTaskStatus) SetProgressNil(b bool)`

 SetProgressNil sets the value for Progress to be an explicit nil

### UnsetProgress
`func (o *SourceAgentDeletionTaskStatus) UnsetProgress()`

UnsetProgress ensures that no value is present for Progress, not even an explicit nil
### GetPercentComplete

`func (o *SourceAgentDeletionTaskStatus) GetPercentComplete() int32`

GetPercentComplete returns the PercentComplete field if non-nil, zero value otherwise.

### GetPercentCompleteOk

`func (o *SourceAgentDeletionTaskStatus) GetPercentCompleteOk() (*int32, bool)`

GetPercentCompleteOk returns a tuple with the PercentComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentComplete

`func (o *SourceAgentDeletionTaskStatus) SetPercentComplete(v int32)`

SetPercentComplete sets PercentComplete field to given value.

### HasPercentComplete

`func (o *SourceAgentDeletionTaskStatus) HasPercentComplete() bool`

HasPercentComplete returns a boolean if a field has been set.



# MCPPackage

# MCPPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistryType** | Pointer to **NullableString** | Package registry that hosts the package. | [optional] 
**Identifier** | Pointer to **NullableString** | Package identifier within the registry. | [optional] 
**Command** | Pointer to **NullableString** | Command used to launch the package. | [optional] 
**Args** | Pointer to **[]string** | Arguments passed to the launch command, in the order they are applied. | [optional] 

## Methods

### NewMCPPackage

`func NewMCPPackage() *MCPPackage`

NewMCPPackage instantiates a new MCPPackage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPPackageWithDefaults

`func NewMCPPackageWithDefaults() *MCPPackage`

NewMCPPackageWithDefaults instantiates a new MCPPackage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegistryType

`func (o *MCPPackage) GetRegistryType() string`

GetRegistryType returns the RegistryType field if non-nil, zero value otherwise.

### GetRegistryTypeOk

`func (o *MCPPackage) GetRegistryTypeOk() (*string, bool)`

GetRegistryTypeOk returns a tuple with the RegistryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistryType

`func (o *MCPPackage) SetRegistryType(v string)`

SetRegistryType sets RegistryType field to given value.

### HasRegistryType

`func (o *MCPPackage) HasRegistryType() bool`

HasRegistryType returns a boolean if a field has been set.

### SetRegistryTypeNil

`func (o *MCPPackage) SetRegistryTypeNil(b bool)`

 SetRegistryTypeNil sets the value for RegistryType to be an explicit nil

### UnsetRegistryType
`func (o *MCPPackage) UnsetRegistryType()`

UnsetRegistryType ensures that no value is present for RegistryType, not even an explicit nil
### GetIdentifier

`func (o *MCPPackage) GetIdentifier() string`

GetIdentifier returns the Identifier field if non-nil, zero value otherwise.

### GetIdentifierOk

`func (o *MCPPackage) GetIdentifierOk() (*string, bool)`

GetIdentifierOk returns a tuple with the Identifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifier

`func (o *MCPPackage) SetIdentifier(v string)`

SetIdentifier sets Identifier field to given value.

### HasIdentifier

`func (o *MCPPackage) HasIdentifier() bool`

HasIdentifier returns a boolean if a field has been set.

### SetIdentifierNil

`func (o *MCPPackage) SetIdentifierNil(b bool)`

 SetIdentifierNil sets the value for Identifier to be an explicit nil

### UnsetIdentifier
`func (o *MCPPackage) UnsetIdentifier()`

UnsetIdentifier ensures that no value is present for Identifier, not even an explicit nil
### GetCommand

`func (o *MCPPackage) GetCommand() string`

GetCommand returns the Command field if non-nil, zero value otherwise.

### GetCommandOk

`func (o *MCPPackage) GetCommandOk() (*string, bool)`

GetCommandOk returns a tuple with the Command field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommand

`func (o *MCPPackage) SetCommand(v string)`

SetCommand sets Command field to given value.

### HasCommand

`func (o *MCPPackage) HasCommand() bool`

HasCommand returns a boolean if a field has been set.

### SetCommandNil

`func (o *MCPPackage) SetCommandNil(b bool)`

 SetCommandNil sets the value for Command to be an explicit nil

### UnsetCommand
`func (o *MCPPackage) UnsetCommand()`

UnsetCommand ensures that no value is present for Command, not even an explicit nil
### GetArgs

`func (o *MCPPackage) GetArgs() []string`

GetArgs returns the Args field if non-nil, zero value otherwise.

### GetArgsOk

`func (o *MCPPackage) GetArgsOk() (*[]string, bool)`

GetArgsOk returns a tuple with the Args field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgs

`func (o *MCPPackage) SetArgs(v []string)`

SetArgs sets Args field to given value.

### HasArgs

`func (o *MCPPackage) HasArgs() bool`

HasArgs returns a boolean if a field has been set.

### SetArgsNil

`func (o *MCPPackage) SetArgsNil(b bool)`

 SetArgsNil sets the value for Args to be an explicit nil

### UnsetArgs
`func (o *MCPPackage) UnsetArgs()`

UnsetArgs ensures that no value is present for Args, not even an explicit nil


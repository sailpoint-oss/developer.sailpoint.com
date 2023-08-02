---
id: rdk
title: Rule Development Kit
pagination_label: RDK
sidebar_label: Rule Development Kit
sidebar_position: 1
sidebar_class_name: rdk
keywords: ['rule', 'development','kit']
description: The SailPoint Rule Development Kit is a project that enables you to develop rules faster and with less effort.
slug: /tools/rule-development-kit
tags: ['CLI']
---

## Start Using the Rule Development Kit

The SailPoint Rule Development Kit is a project you can use to develop rules faster and with less effort.

The Rule Development Kit provides you with the classes and methods available to you when developing rules. You can mock out these classes and run your rule locally to test your logic before submitting it to be reviewed.

Learn how to use the SailPoint Rule Development Kit in this guide.

## Requirements

* [Java 11](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
* [Apache Maven 3.9.3+](https://maven.apache.org/install.html)
  * [Mac OS installation guide](https://www.appsdeveloperblog.com/how-to-install-maven-on-mac-os/)
  * [Windows installation guide](https://phoenixnap.com/kb/install-maven-windows)

## Clone the Project

The Rule Development Kit and its examples can be found in the Github repo [here](https://github.com/sailpoint-oss/rule-development-kit).

Clone the project.

```bash
git clone git@github.com:sailpoint-oss/rule-development-kit.git
```

## Project Structure

```bash
src/
├── main/
│   ├── java/
│   │   └── RuleName.java
│   └── resources/
│       └── rules/
│           └── Rule - RuleType - RuleName.xml
└── test/
    ├── java/
    │   └── sailpoint/
    │       └── RuleNameTest.java
    └── resources/
        └── log4j2.properties
```

* **`src/main/java/`** Use this folder to develop your rules before putting them into the rule xml format, import objects as needed from `sailpoint.*`

* **`src/main/resources/rules/`** Use this folder to store your rules in the xml format you would expect to upload to IdentityNow

* **`src/test/java/sailpoint/`** Use this folder for test classes to test the rules you have implemented

## Install Depedencies

Install all required dependencies by running maven install in the root of the project

```bash
mvn clean install
```

You now have all the necessary components to start writing rules locally.

<!-- ### Intellisense for Rule Objects and Methods

The rule development kit provides you with intellisense when writing rules, you will have access to method names, parameter descriptions, and code completion.

![intellisense](./assets/intellisense.png)

### Local Testing -->

## Writing Rules

In SailPoint solutions, rules serve as a flexible configuration framework implementers can leverage to preform complex or advanced configurations. See [Rules](../../docs/identity-now/rules/index.md) for more information.

### Create Your New Rule

In order to get syntax highlighting and the features from the IDE we will write the rule in native Java and move them over to the xml format needed when storing in Identity Now.

In this guide we will duplicate writing the UsernameGenerator rule that ships with the rule development kit.

Create a new Java class under `src/main/java` called `UsernameGenerator`.

### Import Classes and Initialize Objects Needed in The Rule

Each rule type has inputs provided to the rule. You can view available inputs for each rule type by clicking the rule type [here](/idn/docs/rules/cloud-rules#supported-cloud-rules).

The Username Generator rule uses the `AttributeGenerator` rule type. See [Attribute Generator](/idn/docs/rules/cloud-rules/account-profile-attribute-generator#input) for the available inputs.

In your IDE, import the classes needed, and initialize these inputs within your newly created class.

```java
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import sailpoint.object.Application;
import sailpoint.object.Field;
import sailpoint.object.Identity;
import sailpoint.server.IdnRuleUtil;

public class UsernameGenerator {
    Logger log = LogManager.getLogger(UsernameGenerator.class);
    Identity identity = new Identity();
    Application application = new Application();
    IdnRuleUtil idn;
    Field field = new Field();
}
```

### Write Your Rule Logic

The completed code for the Username Generator is below. If you would like to dive deeper into how this rule was written you can follow the guide [writing your first rule](/idn/docs/rules/guides/your-first-rule).

<details>
  <summary>Completed Username Generator Code</summary>

```java
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import sailpoint.object.Application;
import sailpoint.object.Field;
import sailpoint.object.Identity;
import sailpoint.server.IdnRuleUtil;
import sailpoint.tools.GeneralException;

public class UsernameGenerator {
    Logger log = LogManager.getLogger(UsernameGenerator.class);
    Identity identity = new Identity();
    Application application = new Application();
    IdnRuleUtil idn;
    Field field = new Field();

    int MAX_USERNAME_LENGTH = 12;


    public String generateUsername(String firstName, String lastName) throws GeneralException {
        firstName = StringUtils.trimToNull(firstName);
        lastName = StringUtils.trimToNull(lastName);
        String otherName = identity.getStringAttribute("otherName");

        if(firstName != null) {
            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(lastName != null) {
            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(otherName != null) {
            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if((firstName == null) || (lastName == null)) {
            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );
            return null;
        }

        if(!StringUtils.isEmpty(otherName)) {
            firstName = otherName;
        }

        String username = null;
        String fullName = firstName + "." + lastName;

        if(fullName.length() > MAX_USERNAME_LENGTH) {
            int firstNameLength = firstName.length();

            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        } else {
            username = fullName;
            username = username.toLowerCase();
            if (isUnique(username)) {
                log.debug( "AD Create User Name | Unique username generated: " + username);
                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                return username;
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        }



        return null;
    }

    public boolean isUnique(String username) throws GeneralException {
        return !idn.accountExistsByDisplayName(application.getName(), username);
    }
}
```

</details>

## Convert Rule to XML Format

The final step required before we can test our rule is converting it to xml format. These XML files are stored under the `/src/main/resources/rules` directory in the Rule Development Kit. The template file for `AttributeGenerator` can be found [here](/idn/docs/rules/cloud-rules/account-profile-attribute-generator#template)

Replace `Example Rule` with the preferred name of your rule, and add a short description.

### Copy Over Imports For the Rule

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="AttributeGenerator">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import sailpoint.object.Application;
import sailpoint.object.Field;
import sailpoint.object.Identity;
import sailpoint.server.IdnRuleUtil;
import sailpoint.tools.GeneralException;

  ]]></Source>
</Rule>
```

### Copy the Rule Logic

Copy the logic of your rule inside of the class you created in the previous step.

:::caution

Do not include your initialized variables for the inputs to the rule. These variables will be passed into the rule during runtime.

:::

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="AttributeGenerator">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import sailpoint.object.Application;
import sailpoint.object.Field;
import sailpoint.object.Identity;
import sailpoint.server.IdnRuleUtil;
import sailpoint.tools.GeneralException;


    int MAX_USERNAME_LENGTH = 12;


    public String generateUsername(String firstName, String lastName) throws GeneralException {
        firstName = StringUtils.trimToNull(firstName);
        lastName = StringUtils.trimToNull(lastName);
        String otherName = identity.getStringAttribute("otherName");

        if(firstName != null) {
            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(lastName != null) {
            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(otherName != null) {
            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if((firstName == null) || (lastName == null)) {
            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );
            return null;
        }

        if(!StringUtils.isEmpty(otherName)) {
            firstName = otherName;
        }

        String username = null;
        String fullName = firstName + "." + lastName;

        if(fullName.length() > MAX_USERNAME_LENGTH) {
            int firstNameLength = firstName.length();

            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        } else {
            username = fullName;
            username = username.toLowerCase();
            if (isUnique(username)) {
                log.debug( "AD Create User Name | Unique username generated: " + username);
                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                return username;
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        }



        return null;
    }

    public boolean isUnique(String username) throws GeneralException {
        return !idn.accountExistsByDisplayName(application.getName(), username);
    }

  ]]></Source>
</Rule>
```

### Add Your Return Statement

This line calls the generateUsername function and starts to execute the rule, the result will be returned.

```java
return generateUsername( identity.getFirstname(), identity.getLastname() );
```

<details>
  <summary>Complete XML Rule</summary>

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="AttributeGenerator">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import sailpoint.object.Application;
import sailpoint.object.Field;
import sailpoint.object.Identity;
import sailpoint.server.IdnRuleUtil;
import sailpoint.tools.GeneralException;


    int MAX_USERNAME_LENGTH = 12;


    public String generateUsername(String firstName, String lastName) throws GeneralException {
        firstName = StringUtils.trimToNull(firstName);
        lastName = StringUtils.trimToNull(lastName);
        String otherName = identity.getStringAttribute("otherName");

        if(firstName != null) {
            firstName = firstName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(lastName != null) {
            lastName = lastName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if(otherName != null) {
            otherName = otherName.replaceAll("[^a-zA-Z0-9]", "");
        }

        if((firstName == null) || (lastName == null)) {
            log.debug( "AD Create User Name | Exit from generateUsername method. No last name and first name for user" );
            return null;
        }

        if(!StringUtils.isEmpty(otherName)) {
            firstName = otherName;
        }

        String username = null;
        String fullName = firstName + "." + lastName;

        if(fullName.length() > MAX_USERNAME_LENGTH) {
            int firstNameLength = firstName.length();

            if(firstNameLength > (MAX_USERNAME_LENGTH - 2)) {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName.substring(0, (MAX_USERNAME_LENGTH - 2)) + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        } else {
            username = fullName;
            username = username.toLowerCase();
            if (isUnique(username)) {
                log.debug( "AD Create User Name | Unique username generated: " + username);
                log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                return username;
            } else {
                for(int lastNameLength = 0; lastNameLength < lastName.length(); lastNameLength++) {
                    username = firstName + "." + lastName.charAt(lastNameLength);
                    username = username.toLowerCase();
                    if (isUnique(username)) {
                        log.debug( "AD Create User Name | Unique username generated: " + username);
                        log.debug( "AD Create User Name | Exit from the  GenerateUsername Method" );
                        return username;
                    }
                }
            }
        }



        return null;
    }

    public boolean isUnique(String username) throws GeneralException {
        return !idn.accountExistsByDisplayName(application.getName(), username);
    }

    return generateUsername( identity.getFirstname(), identity.getLastname() );

  ]]></Source>
</Rule>
```

</details>

Once your rule is saved in the XML format, you can begin testing.

## Testing Rules

The Rule Development Kit by default uses the [Mockito](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html) library to mock objects and return mocked results for testing the logic of your rules.

### Create Your Test Class

Create a new class at `/src/test/java/sailpoint` named `UsernameGeneratorTest`.

### Configure Logging and Rule File

Create a logger instance with the name of your test class, and set the `RULE_FILENAME` to the rule you wish to test.

```java
Logger log = LogManager.getLogger(UsernameGeneratorTest.class);

private static final String RULE_FILENAME = "src/main/resources/rules/Rule - AttributeGenerator - UsernameGenerator.xml";
```

### Setup Beanshell Interpreter

Initialize the beanshell interpreter for evaluating the rule.

```java
Interpreter i = new Interpreter();
```

### Mock Objects and Return Mocked Data

Anywhere your rule uses data from IdentityNow you will need to mock out those objects. In the example of the UsernameGenerator the objects used are `IdnRuleUtil`, `Application`, and `Identity`.

```java
IdnRuleUtil idn = mock();
when(idn.accountExistsByDisplayName(any(), any())).thenReturn(true).thenReturn(false);

Application application = mock(Application.class);
when(application.getName()).thenReturn("applicationName");

Identity identity = mock(Identity.class);
when(identity.getFirstname()).thenReturn("Tyler");
when(identity.getLastname()).thenReturn("Smith");
when(identity.getStringAttribute("otherName")).thenReturn("");
```

### Pass Mocked Objects into Interpreter

Here we pass the variables we mocked so that when our rule uses these objects they return our mocked values.

```java
i.set("log", log);
i.set("idn", idn);
i.set("application", application);
i.set("identity", identity);
```

### Evaluate the Rule

Evaluate the rule using BeanShell to get our rule result.

```java
String source = RuleXmlUtils.readRuleSourceFromFilePath(RULE_FILENAME);
result = (String) i.eval(source);
```

### Assertions

Add assertions to your test class to validate that given certain inputs your rule returns your expected result.

```java
assertNotNull(result);
assertEquals(result, "tyler.s");
```

### Run Maven Test

To run the test with maven open the terminal and in the root of the project run

```bash
mvn test -Dtest="UsernameGeneratorTest"
```

Run all tests in the tests directory

```bash
mvn test
```

When your test runs you will see the output of your logs to help with writing logic and debugging.

```java
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running sailpoint.UsernameGeneratorTest
13:02:18.229 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Unique username generated: tyler.s
13:02:18.233 [main] DEBUG sailpoint.UsernameGeneratorTest - AD Create User Name | Exit from the  GenerateUsername Method
13:02:18.237 [main] INFO  sailpoint.UsernameGeneratorTest - Beanshell script returned: tyler.s
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.912 s -- in sailpoint.UsernameGeneratorTest
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  5.046 s
[INFO] Finished at: 2023-08-01T13:02:18-04:00
[INFO] ------------------------------------------------------------------------
```

## Next Steps

Have an issue using the Rule Development Kit? Reach out to us on github [Rule Development Kit](https://github.com/sailpoint-oss/rule-development-kit/issues)

Discuss the tool and other rule specific topics in the [SailPoint Developer Community](https://developer.sailpoint.com/discuss/).

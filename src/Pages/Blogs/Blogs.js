import React from 'react';

const Blgos = () => {
          return (
                    <div>
                          <h2 className='text-center text-danger mt-5'>This is Blogs</h2> 
            <div className='px-5 my-5'>
                  
              <h3> 1. Authentication vs Authorization   </h3>    

<h4>Authentication</h4>

<p>1. Authentication verifies who the user is</p> 
<p>2. Authentication works through passwords, one-time-pins, biometric information etc.</p> 
<p>3. Authentication is visible to and partially changeable by the user</p>  
<h4>Authorization</h4>

<p>1. It is the process of permissin and access to use the resource. </p>
<p>2. Authorization always takes place after Authentication.</p>
<p>3. It is not changeable or visible by the user. </p>


<h3>2. Why we using firebase: </h3>
<p>Firebase is a good authentication system, It provides authentication and authorization. User Authentication is a method that keeps unauthorized users from accessing sensetive data. By using firebase  we can secure our information. We can validate any user information.</p>

<h3>Other options of Authentication:</h3> 
<p>
    <ol>
          <li>Multi Factor Authentication.</li>
          <li>Certificate-based Authentication.</li>
          <li>Biometric Authentication.</li>
          <li>Face recognition.</li>
          <li>Fingerprint scanners.</li>
          <li>speaker recognition.</li>
          <li>Eye scanners.</li>
          <li>Token-based Authentication.</li>
    </ol>
</p>


<h3>3. Firebase Services other than Authentication:</h3>
<p>
    <ul>
          <li>Cloud Functions</li>
          <li>Cloud Firestore</li>
          <li>Hositng</li>
          <li>Cloud storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
          <li>Cloud Messaging</li>
    </ul>
</p>
            </div>
                    </div>
          );
};

export default Blgos;
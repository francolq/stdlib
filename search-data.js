window.Aiken.initSearch([{"doc":"aiken/assoc_list","title":"contains","content":"contains(in m: AssocList&lt;a, b&gt;, key k: a) -&gt; Bool\n&lt;p&gt;Check if a key exists in the map&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;use aiken/map\n\nlet info = map.new() |&amp;gt; map.insert(key: &amp;quot;name&amp;quot;, value: &amp;quot;Aiken&amp;quot;)\n\nassert Some(x) = map.contains(in: info, key: &amp;quot;key&amp;quot;)\n&lt;/code&gt;&lt;/pre&gt;\n","url":"aiken/assoc_list.html#contains"},{"doc":"aiken/assoc_list","title":"delete","content":"delete(in m: AssocList&lt;a, b&gt;, key k: a) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Remove a key-value pair from a map. If the key is not found, no changes are made.&lt;/p&gt;\n","url":"aiken/assoc_list.html#delete"},{"doc":"aiken/assoc_list","title":"filter","content":"filter(m: AssocList&lt;a, b&gt;, with with: fn(a, b) -&gt; Bool) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Keep only the key-value pairs that pass the given predicate.&lt;/p&gt;\n","url":"aiken/assoc_list.html#filter"},{"doc":"aiken/assoc_list","title":"fold","content":"fold(m: AssocList&lt;a, b&gt;, with with: fn(a, b, c) -&gt; c, zero zero: c) -&gt; c\n&lt;p&gt;Fold over the key-value pairs in a map.&lt;/p&gt;\n","url":"aiken/assoc_list.html#fold"},{"doc":"aiken/assoc_list","title":"from_list","content":"from_list(xs: List&lt;#(a, b)&gt;) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Construct an associative list from a list of key-value pairs. Note that when a key is present\nmultiple times, the first occurence prevails.&lt;/p&gt;\n","url":"aiken/assoc_list.html#from_list"},{"doc":"aiken/assoc_list","title":"get","content":"get(in m: AssocList&lt;a, b&gt;, key k: a) -&gt; Option&lt;b&gt;\n&lt;p&gt;Get a value in the map by a key&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;use aiken/map\n\nlet info = map.new() |&amp;gt; map.insert(key: &amp;quot;name&amp;quot;, value: &amp;quot;Aiken&amp;quot;)\n\nassert Some(x) = map.get(in: info, key: &amp;quot;key&amp;quot;)\n&lt;/code&gt;&lt;/pre&gt;\n","url":"aiken/assoc_list.html#get"},{"doc":"aiken/assoc_list","title":"insert","content":"insert(in m: AssocList&lt;a, b&gt;, key k: a, value v: b) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Insert a value in the map by key. If the key already exists, its value is overridden.&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;use aiken/map\n\nmap.new() |&amp;gt; map.insert(key: &amp;quot;name&amp;quot;, value: &amp;quot;Aiken&amp;quot;)\n&lt;/code&gt;&lt;/pre&gt;\n","url":"aiken/assoc_list.html#insert"},{"doc":"aiken/assoc_list","title":"keys","content":"keys(m: AssocList&lt;a, b&gt;) -&gt; List&lt;a&gt;\n","url":"aiken/assoc_list.html#keys"},{"doc":"aiken/assoc_list","title":"map","content":"map(in m: AssocList&lt;a, b&gt;, with with: fn(a, b) -&gt; c) -&gt; AssocList&lt;a, c&gt;\n&lt;p&gt;Apply a function to all key-value pairs in a map.&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;use aiken/map\n\nlet info = map.new() |&amp;gt; map.insert(key: &amp;quot;age&amp;quot;, value: 14)\n\npub fn celebrate_birthday(m: AssocList&amp;lt;String, Int&amp;gt;, key: String) {\n  map.map(in: m, with: fn(_key, value) { value + 1 })\n}\n&lt;/code&gt;&lt;/pre&gt;\n","url":"aiken/assoc_list.html#map"},{"doc":"aiken/assoc_list","title":"new","content":"new() -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Create a new map&lt;/p&gt;\n","url":"aiken/assoc_list.html#new"},{"doc":"aiken/assoc_list","title":"size","content":"size(m: AssocList&lt;a, b&gt;) -&gt; Int\n&lt;p&gt;Return the number of key-value pairs in the map.&lt;/p&gt;\n","url":"aiken/assoc_list.html#size"},{"doc":"aiken/assoc_list","title":"to_list","content":"to_list(m: AssocList&lt;a, b&gt;) -&gt; List&lt;#(a, b)&gt;\n&lt;p&gt;Get the inner list holding the map data&lt;/p&gt;\n","url":"aiken/assoc_list.html#to_list"},{"doc":"aiken/assoc_list","title":"union","content":"union(left left: AssocList&lt;a, b&gt;, right right: AssocList&lt;a, b&gt;) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Combine two maps. If the same key exist in both the left and right maps,\nvalues from the left are preferred (i.e. left-biaised).&lt;/p&gt;\n","url":"aiken/assoc_list.html#union"},{"doc":"aiken/assoc_list","title":"union_with","content":"union_with(left left: AssocList&lt;a, b&gt;, right right: AssocList&lt;a, b&gt;, with with: fn(a, b, b) -&gt; b) -&gt; AssocList&lt;a, b&gt;\n&lt;p&gt;Combine two maps using the provided strategy for combining values when the same\nkey is found in both maps.&lt;/p&gt;\n","url":"aiken/assoc_list.html#union_with"},{"doc":"aiken/assoc_list","title":"values","content":"values(m: AssocList&lt;a, b&gt;) -&gt; List&lt;b&gt;\n","url":"aiken/assoc_list.html#values"},{"doc":"aiken/assoc_list","title":"AssocList","content":"AssocList&lt;key, value&gt;\n\n","url":"aiken/assoc_list.html#AssocList"},{"doc":"aiken/assoc_list","title":"aiken/assoc_list","content":" A module for working with associative lists.\n\n Associative lists are fundamentally ordered lists of key-value pairs,\n which preserve some invariants. In particular, each key is only present\n once in the list.\n\n Note however that they aren&#39;t proper maps or dictionnaries! So, two\n lists constructed in a different order may not be equal (in the sense\n of the equality operator `==`) even though they have the exact same\n elements.","url":"aiken/assoc_list.html"},{"doc":"aiken/option","title":"and_then","content":"and_then(opt: Option&lt;a&gt;, f: fn(a) -&gt; Option&lt;b&gt;) -&gt; Option&lt;b&gt;\n&lt;p&gt;Chain together many computations that may fail.&lt;/p&gt;\n","url":"aiken/option.html#and_then"},{"doc":"aiken/option","title":"map","content":"map(opt: Option&lt;a&gt;, f: fn(a) -&gt; b) -&gt; Option&lt;b&gt;\n&lt;p&gt;Apply a function to the inner value of an Option&lt;/p&gt;\n","url":"aiken/option.html#map"},{"doc":"aiken/option","title":"map2","content":"map2(opt_a: Option&lt;a&gt;, opt_b: Option&lt;b&gt;, f: fn(a, b) -&gt; c) -&gt; Option&lt;c&gt;\n&lt;p&gt;Combine two ‘Option’ together.&lt;/p&gt;\n","url":"aiken/option.html#map2"},{"doc":"aiken/option","title":"map3","content":"map3(opt_a: Option&lt;a&gt;, opt_b: Option&lt;b&gt;, opt_c: Option&lt;c&gt;, f: fn(a, b, c) -&gt; d) -&gt; Option&lt;d&gt;\n","url":"aiken/option.html#map3"},{"doc":"aiken/option","title":"or_else","content":"or_else(opt: Option&lt;a&gt;, default: a) -&gt; a\n&lt;p&gt;Provide a default value, turning an optional value into a normal value.&lt;/p&gt;\n","url":"aiken/option.html#or_else"},{"doc":"aiken/option","title":"aiken/option","content":"","url":"aiken/option.html"},{"doc":"aiken/transaction/certificate","title":"Certificate","content":"Certificate {\n  CredentialRegistration { delegator: StakeCredential }\n  CredentialDeregistration { delegator: StakeCredential }\n  CredentialDelegation { delegator: StakeCredential, delegatee: PoolId }\n  PoolRegistration { pool_id: PoolId, vrf: Hash&lt;Blake2b_224, VerificationKey&gt; }\n  PoolDeregistration { pool_id: PoolId, epoch: Int }\n  Governance\n  TreasuryMovement\n}\n&lt;p&gt;An on-chain certificate attesting of some operation. Publishing\ncertificates / triggers different kind of rules; most of the time,\nthey require signatures from / specific keys.&lt;/p&gt;\n\nCredentialRegistration\n\ndelegator\n\nCredentialDeregistration\n\ndelegator\n\nCredentialDelegation\n\ndelegator\n\ndelegatee\n\nPoolRegistration\n\npool_id\n\nvrf\n\nPoolDeregistration\n\npool_id\n\nepoch\n\nGovernance\n\n\nTreasuryMovement\n\n","url":"aiken/transaction/certificate.html#Certificate"},{"doc":"aiken/transaction/certificate","title":"aiken/transaction/certificate","content":"","url":"aiken/transaction/certificate.html"},{"doc":"aiken/transaction/value","title":"flatten","content":"flatten(value: AssocList&lt;ByteArray, AssocList&lt;ByteArray, Int&gt;&gt;) -&gt; List&lt;#(ByteArray, ByteArray, Int)&gt;\n&lt;p&gt;Flatten a value as list of 3-tuple (PolicyId, AssetName, Quantity).&lt;/p&gt;\n&lt;p&gt;Handy to manipulate values as uniform lists.&lt;/p&gt;\n","url":"aiken/transaction/value.html#flatten"},{"doc":"aiken/transaction/value","title":"from_asset","content":"from_asset(policy_id: ByteArray, asset_name: ByteArray, quantity: Int) -&gt; AssocList&lt;ByteArray, AssocList&lt;ByteArray, Int&gt;&gt;\n&lt;p&gt;Construct a ‘Value’ from an asset identifier (i.e. &lt;code&gt;PolicyId&lt;/code&gt; + &lt;code&gt;AssetName&lt;/code&gt;)\nand a given quantity.&lt;/p&gt;\n","url":"aiken/transaction/value.html#from_asset"},{"doc":"aiken/transaction/value","title":"from_lovelace","content":"from_lovelace(quantity: Int) -&gt; AssocList&lt;ByteArray, AssocList&lt;ByteArray, Int&gt;&gt;\n&lt;p&gt;Construct a ‘Value’ from a lovelace quantity.&lt;/p&gt;\n&lt;p&gt;Friendly reminder: 1 Ada = 1.000.000 Lovelace&lt;/p&gt;\n","url":"aiken/transaction/value.html#from_lovelace"},{"doc":"aiken/transaction/value","title":"lovelace_of","content":"lovelace_of(value: AssocList&lt;ByteArray, AssocList&lt;ByteArray, Int&gt;&gt;) -&gt; Int\n&lt;p&gt;A specialized version of &lt;code&gt;quantity_of&lt;/code&gt; for the Ada currency.&lt;/p&gt;\n","url":"aiken/transaction/value.html#lovelace_of"},{"doc":"aiken/transaction/value","title":"quantity_of","content":"quantity_of(value: AssocList&lt;ByteArray, AssocList&lt;ByteArray, Int&gt;&gt;, policy_id: ByteArray, asset_name: ByteArray) -&gt; Int\n&lt;p&gt;Extract the quantity of a given asset.&lt;/p&gt;\n","url":"aiken/transaction/value.html#quantity_of"},{"doc":"aiken/transaction/value","title":"AssetName","content":"AssetName = ByteArray\n&lt;p&gt;A type-alias for ’AssetName`, which are free-form byte-arrays between\n0 and 32 bytes.&lt;/p&gt;\n\n","url":"aiken/transaction/value.html#AssetName"},{"doc":"aiken/transaction/value","title":"PolicyId","content":"PolicyId = Hash&lt;Blake2b_224, Script&gt;\n&lt;p&gt;A type-alias for a &lt;code&gt;PolicyId&lt;/code&gt;. A &lt;code&gt;PolicyId&lt;/code&gt; is always 28-byte long&lt;/p&gt;\n\n","url":"aiken/transaction/value.html#PolicyId"},{"doc":"aiken/transaction/value","title":"Value","content":"Value = AssocList&lt;PolicyId, AssocList&lt;AssetName, Int&gt;&gt;\n&lt;p&gt;An output &lt;code&gt;Value&lt;/code&gt;, as a key-value pairs of key-value pairs.&lt;/p&gt;\n&lt;p&gt;The first level represents policies id (or simply, scripts hashes),\nand the second layer represents assets within that policy with their\nrespective quantities.&lt;/p&gt;\n\n","url":"aiken/transaction/value.html#Value"},{"doc":"aiken/transaction/value","title":"ada_asset_name","content":"ada_asset_name: ByteArray = #[]\n&lt;p&gt;Ada, the native currency, isn’t associated with any &lt;code&gt;AssetName&lt;/code&gt; (it’s not\npossible to mint Ada!).&lt;/p&gt;\n&lt;p&gt;By convention, it is an empty &lt;code&gt;ByteArray&lt;/code&gt;.&lt;/p&gt;\n","url":"aiken/transaction/value.html#ada_asset_name"},{"doc":"aiken/transaction/value","title":"ada_policy_id","content":"ada_policy_id: ByteArray = #[]\n&lt;p&gt;Ada, the native currency, isn’t associated with any &lt;code&gt;PolicyId&lt;/code&gt; (it’s not\npossible to mint Ada!).&lt;/p&gt;\n&lt;p&gt;By convention, it is an empty &lt;code&gt;ByteArray&lt;/code&gt;.&lt;/p&gt;\n","url":"aiken/transaction/value.html#ada_policy_id"},{"doc":"aiken/transaction/value","title":"aiken/transaction/value","content":"","url":"aiken/transaction/value.html"},{"doc":"aiken/list","title":"all","content":"all(xs: List&lt;a&gt;, predicate: fn(a) -&gt; Bool) -&gt; Bool\n&lt;p&gt;Determine if all elements of the list satisfy the given predicate.&lt;/p&gt;\n&lt;p&gt;Note: an empty list always satisfies the predicate.&lt;/p&gt;\n","url":"aiken/list.html#all"},{"doc":"aiken/list","title":"any","content":"any(xs: List&lt;a&gt;, predicate: fn(a) -&gt; Bool) -&gt; Bool\n&lt;p&gt;Determine if at least one element of the list satisfies the given predicate.&lt;/p&gt;\n&lt;p&gt;Note: an empty list always satisfies the predicate.&lt;/p&gt;\n","url":"aiken/list.html#any"},{"doc":"aiken/list","title":"concat","content":"concat(left: List&lt;a&gt;, right: List&lt;a&gt;) -&gt; List&lt;a&gt;\n&lt;p&gt;Merge two lists together.&lt;/p&gt;\n","url":"aiken/list.html#concat"},{"doc":"aiken/list","title":"drop","content":"drop(xs: List&lt;a&gt;, n: Int) -&gt; List&lt;a&gt;\n&lt;p&gt;Drop the first &lt;code&gt;n&lt;/code&gt; elements of a list.&lt;/p&gt;\n","url":"aiken/list.html#drop"},{"doc":"aiken/list","title":"filter","content":"filter(xs: List&lt;a&gt;, f: fn(a) -&gt; Bool) -&gt; List&lt;a&gt;\n&lt;p&gt;Produce a list from elements that statisfy a predicate.&lt;/p&gt;\n","url":"aiken/list.html#filter"},{"doc":"aiken/list","title":"filter_map","content":"filter_map(xs: List&lt;a&gt;, f: fn(a) -&gt; Option&lt;b&gt;) -&gt; List&lt;b&gt;\n&lt;p&gt;Produce a list from elements that statisfy a predicate.&lt;/p&gt;\n","url":"aiken/list.html#filter_map"},{"doc":"aiken/list","title":"find","content":"find(xs: List&lt;a&gt;, f: fn(a) -&gt; Bool) -&gt; Option&lt;a&gt;\n&lt;p&gt;Find the first element satisfying the given predicate, if any.&lt;/p&gt;\n","url":"aiken/list.html#find"},{"doc":"aiken/list","title":"flat_map","content":"flat_map(xs: List&lt;a&gt;, f: fn(a) -&gt; List&lt;b&gt;) -&gt; List&lt;b&gt;\n&lt;p&gt;Map elements of a list into a new list and flatten the result.&lt;/p&gt;\n","url":"aiken/list.html#flat_map"},{"doc":"aiken/list","title":"foldl","content":"foldl(xs: List&lt;a&gt;, f: fn(a, b) -&gt; b, zero: b) -&gt; b\n&lt;p&gt;Reduce a list from left to right.&lt;/p&gt;\n","url":"aiken/list.html#foldl"},{"doc":"aiken/list","title":"foldr","content":"foldr(xs: List&lt;a&gt;, f: fn(a, b) -&gt; b, zero: b) -&gt; b\n&lt;p&gt;Reduce a list from right to left.&lt;/p&gt;\n","url":"aiken/list.html#foldr"},{"doc":"aiken/list","title":"head","content":"head(xs: List&lt;a&gt;) -&gt; Option&lt;a&gt;\n&lt;p&gt;Get the first element of a list&lt;/p&gt;\n","url":"aiken/list.html#head"},{"doc":"aiken/list","title":"is_elem","content":"is_elem(xs: List&lt;a&gt;, x: a) -&gt; Bool\n&lt;p&gt;Figures out whether a list contain the given element.&lt;/p&gt;\n","url":"aiken/list.html#is_elem"},{"doc":"aiken/list","title":"length","content":"length(xs: List&lt;a&gt;) -&gt; Int\n&lt;p&gt;Get the number of elements in the given list.&lt;/p&gt;\n","url":"aiken/list.html#length"},{"doc":"aiken/list","title":"map","content":"map(xs: List&lt;a&gt;, f: fn(a) -&gt; b) -&gt; List&lt;b&gt;\n&lt;p&gt;Apply a function to each element of a list.&lt;/p&gt;\n","url":"aiken/list.html#map"},{"doc":"aiken/list","title":"map2","content":"map2(xs: List&lt;a&gt;, ys: List&lt;b&gt;, f: fn(a, b) -&gt; c) -&gt; List&lt;c&gt;\n&lt;p&gt;Apply a function of two arguments, combining elements from two lists.&lt;/p&gt;\n&lt;p&gt;Note: if one list is longer, the extra elements are dropped.&lt;/p&gt;\n","url":"aiken/list.html#map2"},{"doc":"aiken/list","title":"map3","content":"map3(xs: List&lt;a&gt;, ys: List&lt;b&gt;, zs: List&lt;c&gt;, f: fn(a, b, c) -&gt; d) -&gt; List&lt;d&gt;\n&lt;p&gt;Apply a function of three arguments, combining elements from three lists.&lt;/p&gt;\n&lt;p&gt;Note: if one list is longer, the extra elements are dropped.&lt;/p&gt;\n","url":"aiken/list.html#map3"},{"doc":"aiken/list","title":"range","content":"range(from: Int, to: Int) -&gt; List&lt;Int&gt;\n&lt;p&gt;Construct a list of a integer from a given range.&lt;/p&gt;\n","url":"aiken/list.html#range"},{"doc":"aiken/list","title":"repeat","content":"repeat(x: a, n: Int) -&gt; List&lt;a&gt;\n&lt;p&gt;Construct a list filled with n copies of a value.&lt;/p&gt;\n","url":"aiken/list.html#repeat"},{"doc":"aiken/list","title":"reverse","content":"reverse(xs: List&lt;a&gt;) -&gt; List&lt;a&gt;\n&lt;p&gt;Get the number of elements in the given list.&lt;/p&gt;\n","url":"aiken/list.html#reverse"},{"doc":"aiken/list","title":"tail","content":"tail(xs: List&lt;a&gt;) -&gt; Option&lt;List&lt;a&gt;&gt;\n&lt;p&gt;Get elements of a list after the first one, if any&lt;/p&gt;\n","url":"aiken/list.html#tail"},{"doc":"aiken/list","title":"take","content":"take(xs: List&lt;a&gt;, n: Int) -&gt; List&lt;a&gt;\n&lt;p&gt;Get the first &lt;code&gt;n&lt;/code&gt; elements of a list.&lt;/p&gt;\n","url":"aiken/list.html#take"},{"doc":"aiken/list","title":"unzip","content":"unzip(xs: List&lt;#(a, b)&gt;) -&gt; #(List&lt;a&gt;, List&lt;b&gt;)\n&lt;p&gt;Decompose a list of tuples into a tuple of lists.&lt;/p&gt;\n","url":"aiken/list.html#unzip"},{"doc":"aiken/list","title":"zip","content":"zip(xs: List&lt;a&gt;, ys: List&lt;b&gt;) -&gt; List&lt;#(a, b)&gt;\n&lt;p&gt;Combine two lists together.&lt;/p&gt;\n&lt;p&gt;Note: if one list is longer, the extra elements are dropped.&lt;/p&gt;\n","url":"aiken/list.html#zip"},{"doc":"aiken/list","title":"aiken/list","content":"","url":"aiken/list.html"},{"doc":"aiken/hash","title":"Blake2b_224","content":"Blake2b_224\n&lt;p&gt;A blake2b-224 hash algorithm.&lt;/p&gt;\n\n","url":"aiken/hash.html#Blake2b_224"},{"doc":"aiken/hash","title":"Blake2b_256","content":"Blake2b_256\n&lt;p&gt;A blake2b-256 hash algorithm.&lt;/p&gt;\n\n","url":"aiken/hash.html#Blake2b_256"},{"doc":"aiken/hash","title":"Hash","content":"Hash&lt;alg, a&gt; = ByteArray\n&lt;p&gt;A self-documenting type-alias with a phantom-type for readability.&lt;/p&gt;\n&lt;p&gt;On-chain, any hash digest value is represented as a plain ‘ByteArray’.\nThough in practice, hashes come from different sources and have\ndifferent semantics.&lt;/p&gt;\n&lt;p&gt;Hence, while this type-alias doesn’t provide any strong type-guarantees,\nit helps writing functions signatures with more meaningful types than mere\n‘ByteArray’.&lt;/p&gt;\n&lt;p&gt;Compare for example:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;pub type Credential {\n  PublicKeyCredential(ByteArray)\n  ScriptCredential(ByteArray)\n}\n&lt;/code&gt;&lt;/pre&gt;\n&lt;p&gt;with&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;language-aiken&quot;&gt;use aiken.hash.{Hash, HashAlgorithm}\n\npub type Credential {\n  PublicKeyCredential(Hash&amp;lt;Blake2b_224, VerificationKey&amp;gt;)\n  ScriptCredential(Hash&amp;lt;Blake2b_224, Script&amp;gt;)\n}\n&lt;/code&gt;&lt;/pre&gt;\n&lt;p&gt;Both are strictly equivalent, but the second reads much better.&lt;/p&gt;\n\n","url":"aiken/hash.html#Hash"},{"doc":"aiken/hash","title":"Sha256","content":"Sha256\n&lt;p&gt;A SHA-256 hash algorithm.&lt;/p&gt;\n\n","url":"aiken/hash.html#Sha256"},{"doc":"aiken/hash","title":"Sha512","content":"Sha512\n&lt;p&gt;A SHA-512 hash algorithm.&lt;/p&gt;\n\n","url":"aiken/hash.html#Sha512"},{"doc":"aiken/hash","title":"aiken/hash","content":"","url":"aiken/hash.html"},{"doc":"aiken/transaction/credential","title":"Address","content":"Address {\n  payment_credential: PaymentCredential,\n  stake_credential: Option&lt;StakeCredential&gt;,\n}\n&lt;p&gt;A Cardano &lt;code&gt;Address&lt;/code&gt; typically holding one or two credential references.&lt;/p&gt;\n&lt;p&gt;Note that legacy bootstrap addresses (a.k.a. ‘Byron addresses’) are\ncompletely excluded from Plutus contexts. Thus, from an on-chain\nperspective only exists addresses of type 00, 01, …, 07 as detailed\nin &lt;a href=&quot;https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#shelley-addresses&quot;&gt;CIP-0019 :: Shelley Addresses&lt;/a&gt;.&lt;/p&gt;\n\nAddress\n\npayment_credential\n\nstake_credential\n","url":"aiken/transaction/credential.html#Address"},{"doc":"aiken/transaction/credential","title":"Credential","content":"Credential {\n  PublicKeyCredential(Hash&lt;Blake2b_224, VerificationKey&gt;)\n  ScriptCredential(Hash&lt;Blake2b_224, Script&gt;)\n}\n&lt;p&gt;A general structure for representing an on-chain &lt;code&gt;Credential&lt;/code&gt;.&lt;/p&gt;\n&lt;p&gt;Credentials are always one of two kinds: a direct public/private key\npair, or a script (native or Plutus).&lt;/p&gt;\n\nPublicKeyCredential\n\n\nScriptCredential\n\n","url":"aiken/transaction/credential.html#Credential"},{"doc":"aiken/transaction/credential","title":"PaymentCredential","content":"PaymentCredential = Credential\n&lt;p&gt;A ‘PaymentCredential’ represents the spending conditions associated with\nsome output. Hence,&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;a &lt;code&gt;PublicKeyCredential&lt;/code&gt; captures an output locked by a public/private key pair;&lt;/li&gt;\n&lt;li&gt;and a &lt;code&gt;ScriptCredential&lt;/code&gt; captures an output locked by a native or Plutus script.&lt;/li&gt;\n&lt;/ul&gt;\n\n","url":"aiken/transaction/credential.html#PaymentCredential"},{"doc":"aiken/transaction/credential","title":"PoolId","content":"PoolId = Hash&lt;Blake2b_224, VerificationKey&gt;\n&lt;p&gt;A unique stake pool identifier, as a hash of its owner verification key.&lt;/p&gt;\n\n","url":"aiken/transaction/credential.html#PoolId"},{"doc":"aiken/transaction/credential","title":"Referenced","content":"Referenced&lt;a&gt; {\n  Inline(a)\n  Pointer { slot_number: Int, transaction_index: Int, certificate_index: Int }\n}\n&lt;p&gt;Represent a type of object that can be represented either inline (by hash)\nor via a reference (i.e. a pointer to an on-chain location).&lt;/p&gt;\n&lt;p&gt;This is mainly use for capturing pointers to a stake credential\nregistration certificate in in the case of so-called pointer addresses.&lt;/p&gt;\n\nInline\n\n\nPointer\n\nslot_number\n\ntransaction_index\n\ncertificate_index\n","url":"aiken/transaction/credential.html#Referenced"},{"doc":"aiken/transaction/credential","title":"Script","content":"Script = Nil\n\n","url":"aiken/transaction/credential.html#Script"},{"doc":"aiken/transaction/credential","title":"StakeCredential","content":"StakeCredential = Referenced&lt;Credential&gt;\n&lt;p&gt;A &lt;code&gt;StakeCredential&lt;/code&gt; represents the delegation and rewards withdrawal conditions\nassociated with some stake address / account.&lt;/p&gt;\n&lt;p&gt;A &lt;code&gt;StakeCredential&lt;/code&gt; is either provided inline, or, by reference using an\non-chain pointer.&lt;/p&gt;\n&lt;p&gt;Read more about pointers in &lt;a href=&quot;https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#pointers&quot;&gt;CIP-0019 :: Pointers&lt;/a&gt;.&lt;/p&gt;\n\n","url":"aiken/transaction/credential.html#StakeCredential"},{"doc":"aiken/transaction/credential","title":"VerificationKey","content":"VerificationKey = Nil\n\n","url":"aiken/transaction/credential.html#VerificationKey"},{"doc":"aiken/transaction/credential","title":"aiken/transaction/credential","content":"","url":"aiken/transaction/credential.html"},{"doc":"aiken/bytearray","title":"concat","content":"concat(left front: ByteArray, right back: ByteArray) -&gt; ByteArray\n&lt;p&gt;Combine two ByteArray together.&lt;/p&gt;\n","url":"aiken/bytearray.html#concat"},{"doc":"aiken/bytearray","title":"drop","content":"drop(bytes: ByteArray, n: Int) -&gt; ByteArray\n&lt;p&gt;Returns the suffix of a ByteArray after n elements.&lt;/p&gt;\n","url":"aiken/bytearray.html#drop"},{"doc":"aiken/bytearray","title":"is_empty","content":"is_empty(bytes: ByteArray) -&gt; Bool\n&lt;p&gt;Returns &lt;code&gt;True&lt;/code&gt; is the given ByteArray is empty.&lt;/p&gt;\n","url":"aiken/bytearray.html#is_empty"},{"doc":"aiken/bytearray","title":"length","content":"length(bytes: ByteArray) -&gt; Int\n&lt;p&gt;Returns the number of bytes in a ByteArray.&lt;/p&gt;\n","url":"aiken/bytearray.html#length"},{"doc":"aiken/bytearray","title":"prepend","content":"prepend(rest: ByteArray, byte: Int) -&gt; ByteArray\n&lt;p&gt;Add a byte element in front of a ByteArray.&lt;/p&gt;\n&lt;p&gt;Note: when the given byte is greater than 255, it wraps-around. So &lt;code&gt;256&lt;/code&gt; is mapped to &lt;code&gt;0&lt;/code&gt;, &lt;code&gt;257&lt;/code&gt; to 1, and so forth.&lt;/p&gt;\n","url":"aiken/bytearray.html#prepend"},{"doc":"aiken/bytearray","title":"slice","content":"slice(bytes: ByteArray, start: Int, end: Int) -&gt; ByteArray\n&lt;p&gt;Extract a ByteArray as a slice of another ByteArray.&lt;/p&gt;\n","url":"aiken/bytearray.html#slice"},{"doc":"aiken/bytearray","title":"take","content":"take(bytes: ByteArray, n: Int) -&gt; ByteArray\n&lt;p&gt;Returns the n length prefix of a ByteArray.&lt;/p&gt;\n","url":"aiken/bytearray.html#take"},{"doc":"aiken/bytearray","title":"aiken/bytearray","content":"","url":"aiken/bytearray.html"},{"doc":"aiken/interval","title":"Interval","content":"Interval&lt;a&gt; {\n  lower_bound: IntervalBound&lt;a&gt;,\n  upper_bound: IntervalBound&lt;a&gt;,\n}\n&lt;p&gt;A type to represent intervals of values. Interval are inhabited by a type /\n&lt;code&gt;a&lt;/code&gt; which is useful for non-infinite intervals that have a finite\nlower-bound and/or upper-bound.&lt;/p&gt;\n\nInterval\n\nlower_bound\n\nupper_bound\n","url":"aiken/interval.html#Interval"},{"doc":"aiken/interval","title":"IntervalBound","content":"IntervalBound&lt;a&gt; {\n  bound_type: IntervalBoundType&lt;a&gt;,\n  is_inclusive: Bool,\n}\n&lt;p&gt;An interval bound, either inclusive or exclusive.&lt;/p&gt;\n\nIntervalBound\n\nbound_type\n\nis_inclusive\n","url":"aiken/interval.html#IntervalBound"},{"doc":"aiken/interval","title":"IntervalBoundType","content":"IntervalBoundType&lt;a&gt; {\n  NegativeInfinity\n  Finite(a)\n  PositiveInfinity\n}\n&lt;p&gt;A type of interval bound. Where finite, a value of type ‘a’ must be provided.&lt;/p&gt;\n\nNegativeInfinity\n\n\nFinite\n\n\nPositiveInfinity\n\n","url":"aiken/interval.html#IntervalBoundType"},{"doc":"aiken/interval","title":"aiken/interval","content":"","url":"aiken/interval.html"},{"doc":"aiken/transaction","title":"Datum","content":"Datum {\n  NoDatum\n  DatumHash(Hash&lt;Blake2b_256, Data&gt;)\n  InlineDatum(Data)\n}\n&lt;p&gt;An output &lt;code&gt;Datum&lt;/code&gt;, which be either:&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;None (&lt;code&gt;NoDatum&lt;/code&gt;)&lt;/li&gt;\n&lt;li&gt;A reference by hash (&lt;code&gt;DatumHash&lt;/code&gt;)&lt;/li&gt;\n&lt;li&gt;A plain inline Plutus data (&lt;code&gt;InlineDatum&lt;/code&gt;)&lt;/li&gt;\n&lt;/ul&gt;\n\nNoDatum\n\n\nDatumHash\n\n\nInlineDatum\n\n","url":"aiken/transaction.html#Datum"},{"doc":"aiken/transaction","title":"Input","content":"Input {\n  output_reference: OutputReference,\n  output: Output,\n}\n&lt;p&gt;An &lt;code&gt;Input&lt;/code&gt; made of an output reference and, the resolved value associated with that output.&lt;/p&gt;\n\nInput\n\noutput_reference\n\noutput\n","url":"aiken/transaction.html#Input"},{"doc":"aiken/transaction","title":"Output","content":"Output {\n  address: Address,\n  value: Value,\n  datum: Datum,\n  reference_script: Option&lt;Hash&lt;Blake2b_224, Script&gt;&gt;,\n}\n&lt;p&gt;A transaction &lt;code&gt;Output&lt;/code&gt;, with an address, a value and optional datums and script references.&lt;/p&gt;\n\nOutput\n\naddress\n\nvalue\n\ndatum\n\nreference_script\n","url":"aiken/transaction.html#Output"},{"doc":"aiken/transaction","title":"OutputReference","content":"OutputReference {\n  transaction_id: TransactionId,\n  output_index: Int,\n}\n&lt;p&gt;An &lt;code&gt;OutputReference&lt;/code&gt; is a unique reference to an output on-chain. The &lt;code&gt;output_index&lt;/code&gt;\ncorresponds to the position in the output list of the transaction (identified by its id)\nthat produced that output&lt;/p&gt;\n\nOutputReference\n\ntransaction_id\n\noutput_index\n","url":"aiken/transaction.html#OutputReference"},{"doc":"aiken/transaction","title":"Redeemer","content":"Redeemer = Data\n&lt;p&gt;A type-alias for Redeemers, passed to scripts for validation. The &lt;code&gt;Data&lt;/code&gt; is\nopaque because it is user-defined and it is the script’s responsability to\nparse it into its expected form.&lt;/p&gt;\n\n","url":"aiken/transaction.html#Redeemer"},{"doc":"aiken/transaction","title":"ScriptContext","content":"ScriptContext {\n  transaction: Transaction,\n  purpose: ScriptPurpose,\n}\n&lt;p&gt;A context given to a script by the Cardano ledger when being executed.&lt;/p&gt;\n&lt;p&gt;The context contains information about the entire transaction that contains\nthe script. The transaction may also contain other scripts; to distinguish\nbetween multiple scripts, the &lt;code&gt;ScriptContext&lt;/code&gt; also contains a &lt;code&gt;purpose&lt;/code&gt;\nwhich indicates which script (or, for what purpose) of the transaction is\nbeing executed.&lt;/p&gt;\n\nScriptContext\n\ntransaction\n\npurpose\n","url":"aiken/transaction.html#ScriptContext"},{"doc":"aiken/transaction","title":"ScriptPurpose","content":"ScriptPurpose {\n  Mint(PolicyId)\n  Spend(OutputReference)\n  WithdrawFrom(StakeCredential)\n  Publish(Certificate)\n}\n&lt;p&gt;Caracterizes the kind of script being executed.&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;\n&lt;p&gt;&lt;code&gt;Mint&lt;/code&gt;:\nrefers to scripts executed as minting/burning policies, to insert\nor remove assets from circulation. It’s parameterized by the identifier\nof the associated policy.&lt;/p&gt;\n&lt;/li&gt;\n&lt;li&gt;\n&lt;p&gt;&lt;code&gt;Spend&lt;/code&gt;:\nrefers to scripts that are used as payment credentials for addresses in\ntransaction outputs. They govern the rule by which the output they\nreference can be spent.&lt;/p&gt;\n&lt;/li&gt;\n&lt;li&gt;\n&lt;p&gt;&lt;code&gt;WithdrawFrom&lt;/code&gt;:\nis triggered to validate reward withdrawals from a reward account whose\nassociated credential is defined as a Plutus script. It identifies the\ntarget reward account.&lt;/p&gt;\n&lt;/li&gt;\n&lt;li&gt;\n&lt;p&gt;&lt;code&gt;Publish&lt;/code&gt;:\nneeded when delegating to a pool using stake credentials defined as a\nPlutus script. This kind is also triggered when de-registering such\nstake credentials. It embeds the certificate that’s being validated.&lt;/p&gt;\n&lt;/li&gt;\n&lt;/ul&gt;\n\nMint\n\n\nSpend\n\n\nWithdrawFrom\n\n\nPublish\n\n","url":"aiken/transaction.html#ScriptPurpose"},{"doc":"aiken/transaction","title":"Transaction","content":"Transaction {\n  inputs: List&lt;Input&gt;,\n  reference_inputs: List&lt;Input&gt;,\n  outputs: List&lt;Output&gt;,\n  fee: Value,\n  mint: Value,\n  certificates: List&lt;Certificate&gt;,\n  withdrawals: AssocList&lt;StakeCredential, Int&gt;,\n  validity_range: ValidityRange,\n  extra_signatories: List&lt;Hash&lt;Blake2b_224, VerificationKey&gt;&gt;,\n  redeemers: AssocList&lt;ScriptPurpose, Redeemer&gt;,\n  datums: AssocList&lt;Hash&lt;Blake2b_256, Data&gt;, Data&gt;,\n  id: TransactionId,\n}\n&lt;p&gt;A Cardano &lt;code&gt;Transaction&lt;/code&gt;, as seen by Plutus scripts.&lt;/p&gt;\n&lt;p&gt;Note that this is a representation of a transaction, and not the 1:1\ntranslation of the transaction as seen by the ledger. In particular,\nPlutus scripts can’t see inputs locked by bootstrap addresses, outputs\nto bootstrap addresses or just transaction metadata.&lt;/p&gt;\n\nTransaction\n\ninputs\n\nreference_inputs\n\noutputs\n\nfee\n\nmint\n\ncertificates\n\nwithdrawals\n\nvalidity_range\n\nextra_signatories\n\nredeemers\n\ndatums\n\nid\n","url":"aiken/transaction.html#Transaction"},{"doc":"aiken/transaction","title":"TransactionId","content":"TransactionId {\n  hash: Hash&lt;Blake2b_256, Transaction&gt;,\n}\n&lt;p&gt;A unique transaction identifier, as the hash of a transaction body. Note that the transaction id\nisn’t a direct hash of the &lt;code&gt;Transaction&lt;/code&gt; as visible on-chain. Rather, they correspond to hash\ndigests of transaction body as they are serialized on the network.&lt;/p&gt;\n\nTransactionId\n\nhash\n","url":"aiken/transaction.html#TransactionId"},{"doc":"aiken/transaction","title":"ValidityRange","content":"ValidityRange = Interval&lt;Int&gt;\n&lt;p&gt;An interval of POSIX time, measured in number milliseconds since 1970-01-01T00:00:00Z.&lt;/p&gt;\n\n","url":"aiken/transaction.html#ValidityRange"},{"doc":"aiken/transaction","title":"aiken/transaction","content":"","url":"aiken/transaction.html"}]);
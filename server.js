Last login: Sat Oct  6 19:37:59 on console
/usr/local/opt/python@2/bin/python2.7: No module named virtualenvwrapper
virtualenvwrapper.sh: There was a problem running the initialization hooks. 

If Python could not import the module virtualenvwrapper.hook_loader,
check that virtualenvwrapper has been installed for
VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python and that PATH is
set properly.
Succ:~ nickerokhin$ ssh -i ~/Downloads/nick.pem ubuntu@ec2-35-163-64-199.us-west-2.compute.amazonaws.com
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-1021-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Oct  7 02:50:44 UTC 2018

  System load:  0.0               Processes:              114
  Usage of /:   38.2% of 7.69GB   Users logged in:        0
  Memory usage: 2%                IP address for ens5:    172.31.22.203
  Swap usage:   0%                IP address for docker0: 172.17.0.1

 * Security certifications for Ubuntu!
   We now have FIPS, STIG, CC and a CIS Benchmark.

   - http://bit.ly/Security_Certification

 * Want to make a highly secure kiosk, smart display or touchscreen?
   Here's a step-by-step tutorial for a rainy weekend, or a startup.

   - https://bit.ly/secure-kiosk


  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

7 packages can be updated.
7 updates are security updates.


Last login: Sun Oct  7 02:23:55 2018 from 172.85.66.26
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ top

top - 02:50:50 up  2:56,  1 user,  load average: 0.00, 0.00, 0.00
Tasks: 113 total,   1 running,  68 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.1 us,  0.1 sy,  0.0 ni, 99.8 id,  0.1 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem : 15950860 total, 14473400 free,   206752 used,  1270708 buff/cache
KiB Swap:        0 total,        0 free,        0 used. 15419488 avail Mem 

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND    
    1 root      20   0  225192   8724   6488 S   0.0  0.1   0:02.73 systemd    
    2 root      20   0       0      0      0 S   0.0  0.0   0:00.00 kthreadd   
    3 root      20   0       0      0      0 I   0.0  0.0   0:00.09 kworker/0:0
    4 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/0:+
    6 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 mm_percpu_+
    7 root      20   0       0      0      0 S   0.0  0.0   0:00.02 ksoftirqd/0
    8 root      20   0       0      0      0 I   0.0  0.0   0:00.17 rcu_sched  
    9 root      20   0       0      0      0 I   0.0  0.0   0:00.00 rcu_bh     
   10 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/0
   11 root      rt   0       0      0      0 S   0.0  0.0   0:00.01 watchdog/0 
   12 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/0    
   13 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/1    
   14 root      rt   0       0      0      0 S   0.0  0.0   0:00.01 watchdog/1 
   15 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/1
   16 root      20   0       0      0      0 S   0.0  0.0   0:00.01 ksoftirqd/1
   18 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/1:+
   19 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/2    
[1]+  Stopped                 top
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ export ETHEREUM_HTTP=https://kovan.augur.net/ethereum-http && export ETHEREUM_WS=wss://kovan.augur.net/ethereum-ws 
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ cd augur-node/
ubuntu@ip-172-31-22-203:~/augur-node$ ls
Dockerfile     certs                 node_modules       tsconfig.json
LICENSE        config.json           nohup.out          tslint.json
Procfile       definitions           package-lock.json  upload-block-1
README.md      docker-compose.yml    package.json       upload-block-42
app.json       docker-entrypoint.sh  scripts            wait-for-url.sh
augur-42-2.db  integration           src                wallaby.conf.js
build          knexfile.js           test               yarn.lock
ubuntu@ip-172-31-22-203:~/augur-node$ npm start

> augur-node@5.11.0-1 start /home/ubuntu/augur-node
> ts-node ./src/runServer

connecting to augur-node: undefined
connecting to ethereum-node: {"http":"https://kovan.augur.net/ethereum-http","ws":"wss://kovan.augur.net/ethereum-ws "}
websocket wss://kovan.augur.net/ethereum-ws  opened
connected to ethereum
Found prior database: /home/ubuntu/augur-node/augur-42-2.db
/home/ubuntu/augur-node/augur-42-2.db
Starting websocket secure server on port 9002
Starting websocket server on port 9001
Getting Augur logs from block 8988398 to block 8988455
got 0 logs in blocks { fromBlock: 8988398, toBlock: 8988455 }
Fetching blocks details from 8988398 to 8988455
new block: 8988398, 1538880192 (Sun Oct 07 2018 02:43:12 GMT+0000 (UTC))
new block: 8988426, 1538880408 (Sun Oct 07 2018 02:46:48 GMT+0000 (UTC))
new block: 8988455, 1538880636 (Sun Oct 07 2018 02:50:36 GMT+0000 (UTC))
Finished batch load from 8988398 to 8988455
Bulk sync with blockchain complete.
Starting blockstream at block  8988456
new block: 8988456, 1538880640 (Sun Oct 07 2018 02:50:40 GMT+0000 (UTC))
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^Z
[2]+  Stopped                 npm start
ubuntu@ip-172-31-22-203:~/augur-node$ npm run start-clean
npm ERR! missing script: start-clean

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/ubuntu/.npm/_logs/2018-10-07T02_51_53_016Z-debug.log
ubuntu@ip-172-31-22-203:~/augur-node$ npm start-clean

Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    completion, config, create, ddp, dedupe, deprecate,
    dist-tag, docs, doctor, edit, explore, get, help,
    help-search, hook, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rb, rebuild, repo, restart,
    root, run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    /home/ubuntu/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.4.1 /usr/lib/node_modules/npm

ubuntu@ip-172-31-22-203:~/augur-node$ npm run docker:pg:restart

> augur-node@5.11.0-1 docker:pg:restart /home/ubuntu/augur-node
> npm run docker:pg:stop && npm run docker:pg:start


> augur-node@5.11.0-1 docker:pg:stop /home/ubuntu/augur-node
> ./scripts/postgres/stop.sh

Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.38/containers/augur-postgres/kill?signal=KILL: dial unix /var/run/docker.sock: connect: permission denied
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! augur-node@5.11.0-1 docker:pg:stop: `./scripts/postgres/stop.sh`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the augur-node@5.11.0-1 docker:pg:stop script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/ubuntu/.npm/_logs/2018-10-07T02_52_38_726Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! augur-node@5.11.0-1 docker:pg:restart: `npm run docker:pg:stop && npm run docker:pg:start`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the augur-node@5.11.0-1 docker:pg:restart script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/ubuntu/.npm/_logs/2018-10-07T02_52_38_735Z-debug.log
ubuntu@ip-172-31-22-203:~/augur-node$ sudo npm run docker:pg:restart

> augur-node@5.11.0-1 docker:pg:restart /home/ubuntu/augur-node
> npm run docker:pg:stop && npm run docker:pg:start


> augur-node@5.11.0-1 docker:pg:stop /home/ubuntu/augur-node
> ./scripts/postgres/stop.sh

augur-postgres

> augur-node@5.11.0-1 docker:pg:start /home/ubuntu/augur-node
> ./scripts/postgres/start.sh

5f036c00824af0d90b7c904dd0b0154927e3bbe303a5f16affe62a1f2fda2382
ubuntu@ip-172-31-22-203:~/augur-node$ export DATABASE_URL='postgresql://augur:augur@localhost:5432/augur"
> 
> ^C
ubuntu@ip-172-31-22-203:~/augur-node$ export DATABASE_URL=postgresql://augur:augur@localhost:5432/augur 

ubuntu@ip-172-31-22-203:~/augur-node$ npm run clean-start

> augur-node@5.11.0-1 clean-start /home/ubuntu/augur-node
> npm run rebuild && npm start


> augur-node@5.11.0-1 rebuild /home/ubuntu/augur-node
> npm run clean && npm run build


> augur-node@5.11.0-1 clean /home/ubuntu/augur-node
> rm -rf augur*.db build definitions


> augur-node@5.11.0-1 build /home/ubuntu/augur-node
> tsc


> augur-node@5.11.0-1 start /home/ubuntu/augur-node
> ts-node ./src/runServer

connecting to augur-node: undefined
connecting to ethereum-node: {"http":"https://kovan.augur.net/ethereum-http","ws":"wss://kovan.augur.net/ethereum-ws "}
websocket wss://kovan.augur.net/ethereum-ws  opened
connected to ethereum
/home/ubuntu/augur-node/augur-42-2.db
Starting websocket secure server on port 9002
Starting websocket server on port 9001
websocket error: { Error: listen EADDRINUSE :::9002
    at Server.setupListenHandle [as _listen2] (net.js:1360:14)
    at listenInCluster (net.js:1401:12)
    at Server.listen (net.js:1485:7)
    at Object.runWebsocketServer (/home/ubuntu/augur-node/src/server/run-websocket-server.ts:50:12)
    at Object.runServer (/home/ubuntu/augur-node/src/server/run-server.ts:26:32)
    at AugurNodeController.<anonymous> (/home/ubuntu/augur-node/src/controller.ts:47:27)
    at Generator.next (<anonymous>)
    at fulfilled (/home/ubuntu/augur-node/src/controller.ts:4:58)
    at <anonymous>
  errno: 'EADDRINUSE',
  code: 'EADDRINUSE',
  syscall: 'listen',
  address: '::',
  port: 9002 }
websocket error: { Error: listen EADDRINUSE :::9001
    at Server.setupListenHandle [as _listen2] (net.js:1360:14)
    at listenInCluster (net.js:1401:12)
    at Server.listen (net.js:1485:7)
    at Object.runWebsocketServer (/home/ubuntu/augur-node/src/server/run-websocket-server.ts:58:12)
    at Object.runServer (/home/ubuntu/augur-node/src/server/run-server.ts:26:32)
    at AugurNodeController.<anonymous> (/home/ubuntu/augur-node/src/controller.ts:47:27)
    at Generator.next (<anonymous>)
    at fulfilled (/home/ubuntu/augur-node/src/controller.ts:4:58)
    at <anonymous>
  errno: 'EADDRINUSE',
  code: 'EADDRINUSE',
  syscall: 'listen',
  address: '::',
  port: 9001 }
Getting Augur logs from block 7926279 to block 8988472
got 954 logs in blocks { fromBlock: 7926279, toBlock: 7926471 }
Fetching blocks details from 7926298 to 7926349
got 0 logs in blocks { fromBlock: 7926472, toBlock: 7927191 }
got 34 logs in blocks { fromBlock: 7927192, toBlock: 7927911 }
Fetching blocks details from 7926472 to 7927191
got 0 logs in blocks { fromBlock: 7927912, toBlock: 7928631 }
new block: 7926298, 1531109176 (Mon Jul 09 2018 04:06:16 GMT+0000 (UTC))
Processing 3 logs
got 0 logs in blocks { fromBlock: 7928632, toBlock: 7929351 }
Fetching blocks details from 7927666 to 7927696
new block: 7926299, 1531109180 (Mon Jul 09 2018 04:06:20 GMT+0000 (UTC))
Processing 1 logs
new block: 7926312, 1531109280 (Mon Jul 09 2018 04:08:00 GMT+0000 (UTC))
Processing 1 logs
new block: 7926313, 1531109284 (Mon Jul 09 2018 04:08:04 GMT+0000 (UTC))
got 0 logs in blocks { fromBlock: 7929352, toBlock: 7930071 }
Processing 1 logs
new block: 7926314, 1531109288 (Mon Jul 09 2018 04:08:08 GMT+0000 (UTC))
Processing 10 logs
Fetching blocks details from 7927912 to 7928631
got 0 logs in blocks { fromBlock: 7930072, toBlock: 7930791 }
Fetching blocks details from 7928632 to 7929351
got 0 logs in blocks { fromBlock: 7930792, toBlock: 7931511 }
Fetching blocks details from 7929352 to 7930071
got 0 logs in blocks { fromBlock: 7931512, toBlock: 7932231 }
Fetching blocks details from 7930072 to 7930791
got 0 logs in blocks { fromBlock: 7932232, toBlock: 7932951 }
new block: 7926315, 1531109300 (Mon Jul 09 2018 04:08:20 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7930792 to 7931511
got 0 logs in blocks { fromBlock: 7932952, toBlock: 7933671 }
Fetching blocks details from 7931512 to 7932231
got 0 logs in blocks { fromBlock: 7933672, toBlock: 7934391 }
Fetching blocks details from 7932232 to 7932951
new block: 7926316, 1531109304 (Mon Jul 09 2018 04:08:24 GMT+0000 (UTC))
Processing 8 logs
got 0 logs in blocks { fromBlock: 7934392, toBlock: 7935111 }
Fetching blocks details from 7932952 to 7933671
got 0 logs in blocks { fromBlock: 7935112, toBlock: 7935831 }
Fetching blocks details from 7933672 to 7934391
got 0 logs in blocks { fromBlock: 7935832, toBlock: 7936551 }
new block: 7926317, 1531109316 (Mon Jul 09 2018 04:08:36 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7934392 to 7935111
got 0 logs in blocks { fromBlock: 7936552, toBlock: 7937271 }
Fetching blocks details from 7935112 to 7935831
got 0 logs in blocks { fromBlock: 7937272, toBlock: 7937991 }
new block: 7926318, 1531109320 (Mon Jul 09 2018 04:08:40 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7935832 to 7936551
got 0 logs in blocks { fromBlock: 7937992, toBlock: 7938711 }
Fetching blocks details from 7936552 to 7937271
got 0 logs in blocks { fromBlock: 7938712, toBlock: 7939431 }
new block: 7926319, 1531109324 (Mon Jul 09 2018 04:08:44 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7937272 to 7937991
got 0 logs in blocks { fromBlock: 7939432, toBlock: 7940151 }
Fetching blocks details from 7937992 to 7938711
got 0 logs in blocks { fromBlock: 7940152, toBlock: 7940871 }
new block: 7926320, 1531109336 (Mon Jul 09 2018 04:08:56 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7938712 to 7939431
got 104 logs in blocks { fromBlock: 7940872, toBlock: 7941591 }
Fetching blocks details from 7939432 to 7940151
got 0 logs in blocks { fromBlock: 7941592, toBlock: 7942311 }
new block: 7926321, 1531109340 (Mon Jul 09 2018 04:09:00 GMT+0000 (UTC))
Processing 8 logs
Fetching blocks details from 7940152 to 7940871
got 0 logs in blocks { fromBlock: 7942312, toBlock: 7943031 }
Fetching blocks details from 7941028 to 7941474
got 0 logs in blocks { fromBlock: 7943032, toBlock: 7943751 }
new block: 7926322, 1531109352 (Mon Jul 09 2018 04:09:12 GMT+0000 (UTC))
Processing 8 logs
got 0 logs in blocks { fromBlock: 7943752, toBlock: 7944471 }
Fetching blocks details from 7941592 to 7942311
got 0 logs in blocks { fromBlock: 7944472, toBlock: 7945191 }
new block: 7926323, 1531109356 (Mon Jul 09 2018 04:09:16 GMT+0000 (UTC))
Processing 8 logs
got 0 logs in blocks { fromBlock: 7945192, toBlock: 7945911 }
Fetching blocks details from 7942312 to 7943031
got 0 logs in blocks { fromBlock: 7945912, toBlock: 7946631 }
Fetching blocks details from 7943032 to 7943751
new block: 7926324, 1531109360 (Mon Jul 09 2018 04:09:20 GMT+0000 (UTC))
Processing 26 logs
got 0 logs in blocks { fromBlock: 7946632, toBlock: 7947351 }
^Z
[3]+  Stopped                 npm run clean-start
ubuntu@ip-172-31-22-203:~/augur-node$ sudo reboot
Connection to ec2-35-163-64-199.us-west-2.compute.amazonaws.com closed by remote host.
Connection to ec2-35-163-64-199.us-west-2.compute.amazonaws.com closed.
Succ:~ nickerokhin$ ssh -i ~/Downloads/nick.pem ubuntu@ec2-35-163-64-199.us-west-2.compute.amazonaws.com
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-1021-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Oct  7 02:54:13 UTC 2018

  System load:  0.28              Processes:              120
  Usage of /:   39.5% of 7.69GB   Users logged in:        0
  Memory usage: 1%                IP address for ens5:    172.31.22.203
  Swap usage:   0%                IP address for docker0: 172.17.0.1

 * Security certifications for Ubuntu!
   We now have FIPS, STIG, CC and a CIS Benchmark.

   - http://bit.ly/Security_Certification

 * Want to make a highly secure kiosk, smart display or touchscreen?
   Here's a step-by-step tutorial for a rainy weekend, or a startup.

   - https://bit.ly/secure-kiosk


  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

7 packages can be updated.
7 updates are security updates.


Last login: Sun Oct  7 02:50:45 2018 from 172.85.66.26
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ cd augur-node/
ubuntu@ip-172-31-22-203:~/augur-node$ ls
Dockerfile  app.json     definitions           knexfile.js        package.json  tsconfig.json    wait-for-url.sh
LICENSE     build        docker-compose.yml    node_modules       scripts       tslint.json      wallaby.conf.js
Procfile    certs        docker-entrypoint.sh  nohup.out          src           upload-block-1   yarn.lock
README.md   config.json  integration           package-lock.json  test          upload-block-42
ubuntu@ip-172-31-22-203:~/augur-node$ export DATABASE_URL=postgresql://augur:augur@localhost:5432/augur
ubuntu@ip-172-31-22-203:~/augur-node$ sudo npm run docker:pg:start

> augur-node@5.11.0-1 docker:pg:start /home/ubuntu/augur-node
> ./scripts/postgres/start.sh

6217f31cc7b75933f9fc452a511bee3bee0b0b96347a8b266e052582313f4254
ubuntu@ip-172-31-22-203:~/augur-node$ rm nohup.out 
ubuntu@ip-172-31-22-203:~/augur-node$ nohup npm run clean-start & 
[1] 2003
ubuntu@ip-172-31-22-203:~/augur-node$ nohup: ignoring input and appending output to 'nohup.out'
vim nohup.out 
[1]+  Exit 1                  nohup npm run clean-start
ubuntu@ip-172-31-22-203:~/augur-node$ export ETHEREUM_HTTP=https://kovan.augur.net/ethereum-http && export ETHEREUM_WS=wss://kovan.augur.net/ethereum-ws 
ubuntu@ip-172-31-22-203:~/augur-node$ nohup npm run clean-start & 
[1] 2097
ubuntu@ip-172-31-22-203:~/augur-node$ nohup: ignoring input and appending output to 'nohup.out'
vim nohup.out 
ubuntu@ip-172-31-22-203:~/augur-node$ vim nohup.out 
ubuntu@ip-172-31-22-203:~/augur-node$ top

top - 02:59:51 up 6 min,  1 user,  load average: 0.13, 0.09, 0.03
Tasks: 121 total,   1 running,  76 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.7 us,  0.9 sy,  0.0 ni, 95.5 id,  0.4 wa,  0.0 hi,  0.5 si,  0.0 st
KiB Mem : 15950860 total, 14535888 free,   543140 used,   871832 buff/cache
KiB Swap:        0 total,        0 free,        0 used. 15110476 avail Mem 

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND                                              
 2159 ubuntu    20   0 1307424 304060  25160 S   9.0  1.9   0:15.62 node                                                 
 2170 999       20   0  296148  28288  20304 S   5.3  0.2   0:04.97 postgres                                             
 1843 root      20   0  453484   3696   2528 S   4.7  0.0   0:04.57 docker-proxy                                         
  761 root      20   0 1167924  70384  38332 S   0.3  0.4   0:00.58 dockerd                                              
    1 root      20   0  225360   9140   6728 S   0.0  0.1   0:03.13 systemd                                              
    2 root      20   0       0      0      0 S   0.0  0.0   0:00.00 kthreadd                                             
    3 root      20   0       0      0      0 I   0.0  0.0   0:00.02 kworker/0:0                                          
    4 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/0:0H                                         
    6 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 mm_percpu_wq                                         
    7 root      20   0       0      0      0 S   0.0  0.0   0:00.02 ksoftirqd/0                                          
    8 root      20   0       0      0      0 I   0.0  0.0   0:00.05 rcu_sched                                            
    9 root      20   0       0      0      0 I   0.0  0.0   0:00.00 rcu_bh                                               
   10 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/0                                          
   11 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 watchdog/0                                           
   12 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/0                                              
   13 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/1                                              
   14 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 watchdog/1                                           
   15 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/1                                          
   16 root      20   0       0      0      0 S   0.0  0.0   0:00.01 ksoftirqd/1                                          
   18 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/1:0H                                         
   19 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/2                                              
   20 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 watchdog/2                                           
   21 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/2                                          
   22 root      20   0       0      0      0 S   0.0  0.0   0:00.01 ksoftirqd/2                                          
   24 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/2:0H                                         
   25 root      20   0       0      0      0 S   0.0  0.0   0:00.00 cpuhp/3                                              
   26 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 watchdog/3                                           
   27 root      rt   0       0      0      0 S   0.0  0.0   0:00.00 migration/3                                          
   28 root      20   0       0      0      0 S   0.0  0.0   0:00.01 ksoftirqd/3                                          
   30 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 kworker/3:0H                                         
   31 root      20   0       0      0      0 S   0.0  0.0   0:00.00 kdevtmpfs                                            
   32 root       0 -20       0      0      0 I   0.0  0.0   0:00.00 netns                                                
ubuntu@ip-172-31-22-203:~/augur-node$ ls
Dockerfile  app.json     definitions           knexfile.js        package.json  tsconfig.json    wait-for-url.sh
LICENSE     build        docker-compose.yml    node_modules       scripts       tslint.json      wallaby.conf.js
Procfile    certs        docker-entrypoint.sh  nohup.out          src           upload-block-1   yarn.lock
README.md   config.json  integration           package-lock.json  test          upload-block-42
ubuntu@ip-172-31-22-203:~/augur-node$ cd ..
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ cd test-augur/
ubuntu@ip-172-31-22-203:~/test-augur$ ls
node_modules  package-lock.json  package.json  server.js
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^Z
[2]+  Stopped                 npm start
ubuntu@ip-172-31-22-203:~/test-augur$ cd ..
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ cd augur-node/
ubuntu@ip-172-31-22-203:~/augur-node$ ls
Dockerfile  app.json     definitions           knexfile.js        package.json  tsconfig.json    wait-for-url.sh
LICENSE     build        docker-compose.yml    node_modules       scripts       tslint.json      wallaby.conf.js
Procfile    certs        docker-entrypoint.sh  nohup.out          src           upload-block-1   yarn.lock
README.md   config.json  integration           package-lock.json  test          upload-block-42
ubuntu@ip-172-31-22-203:~/augur-node$ vim nohup.out 
ubuntu@ip-172-31-22-203:~/augur-node$ ls
Dockerfile  app.json     definitions           knexfile.js        package.json  tsconfig.json    wait-for-url.sh
LICENSE     build        docker-compose.yml    node_modules       scripts       tslint.json      wallaby.conf.js
Procfile    certs        docker-entrypoint.sh  nohup.out          src           upload-block-1   yarn.lock
README.md   config.json  integration           package-lock.json  test          upload-block-42
ubuntu@ip-172-31-22-203:~/augur-node$ cd ..
ubuntu@ip-172-31-22-203:~$ ls
augur-node  test-augur
ubuntu@ip-172-31-22-203:~$ cd test-augur/
ubuntu@ip-172-31-22-203:~/test-augur$ ls
node_modules  package-lock.json  package.json  server.js
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
null
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
null
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
{}
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: https://dev.augur.net/augur-node 
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://rinkeby.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","https://dev.augur.net/augur-node"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket https://dev.augur.net/augur-node closed: 1006 connection failed
websocket https://dev.augur.net/augur-node  closed: 1006 connection failed
could not connect to augur-node at https://dev.augur.net/augur-node  Error: Web socket closed without opening, usually means failed connection.
    at W3CWebSocket.webSocketClient.onclose (/home/ubuntu/test-augur/node_modules/ethrpc/src/transport/ws-transport.js:60:44)
    at W3CWebSocket._dispatchEvent [as dispatchEvent] (/home/ubuntu/test-augur/node_modules/yaeti/lib/EventTarget.js:107:17)
    at W3CWebSocket.onConnectFailed (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:219:14)
    at WebSocketClient.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:59:25)
    at emitOne (events.js:116:13)
    at WebSocketClient.emit (events.js:211:7)
    at WebSocketClient.failHandshake (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:326:10)
    at ClientRequest.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:265:18)
    at emitOne (events.js:121:20)
    at ClientRequest.emit (events.js:211:7)
connected to ethereum
undefined
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: notifications not supported
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: https://dev.augur.net/augur-node 
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://rinkeby.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://rinkeby.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket https://dev.augur.net/augur-node  closed: 1006 connection failed
could not connect to augur-node at https://dev.augur.net/augur-node  Error: Web socket closed without opening, usually means failed connection.
    at W3CWebSocket.webSocketClient.onclose (/home/ubuntu/test-augur/node_modules/ethrpc/src/transport/ws-transport.js:60:44)
    at W3CWebSocket._dispatchEvent [as dispatchEvent] (/home/ubuntu/test-augur/node_modules/yaeti/lib/EventTarget.js:107:17)
    at W3CWebSocket.onConnectFailed (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:219:14)
    at WebSocketClient.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:59:25)
    at emitOne (events.js:116:13)
    at WebSocketClient.emit (events.js:211:7)
    at WebSocketClient.failHandshake (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:326:10)
    at ClientRequest.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:265:18)
    at emitOne (events.js:121:20)
    at ClientRequest.emit (events.js:211:7)
websocket wss://rinkeby.augur.net/ethereum-ws opened
connected to ethereum
undefined
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: https://dev.augur.net/augur-node
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://rinkeby.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://rinkeby.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket https://dev.augur.net/augur-node closed: 1006 connection failed
could not connect to augur-node at https://dev.augur.net/augur-node Error: Web socket closed without opening, usually means failed connection.
    at W3CWebSocket.webSocketClient.onclose (/home/ubuntu/test-augur/node_modules/ethrpc/src/transport/ws-transport.js:60:44)
    at W3CWebSocket._dispatchEvent [as dispatchEvent] (/home/ubuntu/test-augur/node_modules/yaeti/lib/EventTarget.js:107:17)
    at W3CWebSocket.onConnectFailed (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:219:14)
    at WebSocketClient.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:59:25)
    at emitOne (events.js:116:13)
    at WebSocketClient.emit (events.js:211:7)
    at WebSocketClient.failHandshake (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:326:10)
    at ClientRequest.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:265:18)
    at emitOne (events.js:121:20)
    at ClientRequest.emit (events.js:211:7)
websocket wss://rinkeby.augur.net/ethereum-ws opened
connected to ethereum
undefined
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: wss://rinkeby.augur.net/augur-node
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://rinkeby.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://rinkeby.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket wss://rinkeby.augur.net/augur-node closed: 1006 connection failed
could not connect to augur-node at wss://rinkeby.augur.net/augur-node Error: Web socket closed without opening, usually means failed connection.
    at W3CWebSocket.webSocketClient.onclose (/home/ubuntu/test-augur/node_modules/ethrpc/src/transport/ws-transport.js:60:44)
    at W3CWebSocket._dispatchEvent [as dispatchEvent] (/home/ubuntu/test-augur/node_modules/yaeti/lib/EventTarget.js:107:17)
    at W3CWebSocket.onConnectFailed (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:219:14)
    at WebSocketClient.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/W3CWebSocket.js:59:25)
    at emitOne (events.js:116:13)
    at WebSocketClient.emit (events.js:211:7)
    at WebSocketClient.failHandshake (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:326:10)
    at ClientRequest.<anonymous> (/home/ubuntu/test-augur/node_modules/websocket/lib/WebSocketClient.js:265:18)
    at emitOne (events.js:121:20)
    at ClientRequest.emit (events.js:211:7)
websocket wss://rinkeby.augur.net/ethereum-ws opened
connected to ethereum
undefined
^Z
[3]+  Stopped                 npm start
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
{ version: '5.9.0-1',
  net_version: '42',
  netId: '42',
  isSyncFinished: true,
  addresses: 
   { Controller: '0x591b727c84ead2ea8bdb83cdd6e68f5c79bcab49',
     Universe: '0xe0fb73227c37051611c3edc091d6858f2a230ffe',
     Augur: '0x7660d67717e5665326c10b4c7a0a0fc9a6de66bc',
     LegacyReputationToken: '0xf209d83e41cb2dafccdb71544e14f8a2fe6bfc74',
     CancelOrder: '0xc849cfa5c9b4d53018134236cc3f685124853784',
     Cash: '0xa265726f41b51bacb5d8e2907abceda9bc21b69b',
     ClaimTradingProceeds: '0x3b537103720499c7e48565ccf5a08c8f7ce8df66',
     CompleteSets: '0x42ecdbdb380ab0812ecfbe6dbd6a7fb022ef3e9f',
     CreateOrder: '0xd39d66e88bc47783607eb1ca80fe4f1422150f4f',
     FillOrder: '0xb2e1c0301dd703b9a55797d215294be7e2b1122f',
     Order: '0xa912e71a01c754560a1ecf4f8fe3d32f0996efe2',
     Orders: '0xe8a7cf63e73aee828b372802ba2dd717a4f0d6b0',
     OrdersFetcher: '0xa76e6040dfdb42198fccd58d89e890e4670a88e7',
     ShareToken: '0xc9d840dcebba8d4f493cd5a09d5c8f859f52591a',
     Trade: '0xb0de64b40973fff9f4b82cecf7be2754329d3c07',
     TradingEscapeHatch: '0x669c8504a7fbdd94e132ec246834607f36bbf44a' },
  highestBlock: 
   { number: 8988763,
     hash: '0x973d60788886baf442fa56b93506a097c80d267e23ee8fa06dc5cd88012deb69',
     timestamp: 1538883024 },
  lastProcessedBlock: 
   { number: 8988759,
     hash: '0x2cef3be17a6575c6deef6706cd51bb49a7d414f4f410c7c3a0d71d9d2cf70336',
     timestamp: 1538882988 } }
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 

[4]+  Stopped                 vim server.js
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[ { popularity: '0.4', category: 'CLIMATE' },
  { popularity: '0.0001', category: 'SPORTS' },
  { popularity: '0', category: 'CRYPTO' },
  { popularity: '0', category: 'FINANCE' },
  { popularity: '0', category: 'GAS' },
  { popularity: '0', category: 'HOUSING' },
  { popularity: '0', category: 'MEDICINE' },
  { popularity: '0', category: 'POLITICS' },
  { popularity: '0', category: 'ROFLES' },
  { popularity: '0', category: 'SCIENCE' },
  { popularity: '0', category: 'SPACE' },
  { popularity: '0', category: 'STOCKS' },
  { popularity: '0', category: 'TEMPERATURE' },
  { popularity: '0', category: 'TEST' },
  { popularity: '0', category: 'AGRICULTURE' },
  { popularity: '0', category: 'VEIL' },
  { popularity: '0', category: 'AUGUR' } ]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ ls
node_modules  package-lock.json  package.json  server.js
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[ '0x7ff5587568854bebe22fc75d663dacd4b6aaceb9',
  '0xb9a15002c5ac6a83c36313555a5c91ef9f6ff45b',
  '0x0ad40a1ca491d3b1768c67d0f79a881d81d87bb4',
  '0x2a8c208390560dd9bfb501279ae05bd705e796f2',
  '0xb2f8e9c0978ad739dee37c43ac92efd6c69e7090',
  '0x6a6e8b94b248e9bdab65caffbf4ef8555cfce53d',
  '0xb0b6e00cc75cb3bfffd4b652a16766e6399dcd0c',
  '0xa8fce8e447392d0176dec3839adce3f885492f4e',
  '0xe66791e7556bff7a043c0381e3a44bf5e0580a66',
  '0x0c55e40b48de308a3b94e2a7bc7eec7b8c2324a7',
  '0x91e41c38f231a6dbbab641092171b95caafa137f',
  '0x351d1da09579078398f061cf5c83822127de8b29',
  '0xbb3522f0ffe0e29c1122e3f7ab3764ccd4896659',
  '0x7c78cffd196e541d6e66119800f83b23a5d96cf1',
  '0x006259afe9e2168862a642d81ccc0d3bdf9c71c9',
  '0xdeb142661547d6d1b1b0684fb638e6450c2aa500',
  '0x29623c6aa78b5c63d07332a0bff704581d35cea7',
  '0xffe26e14411b26e125bd4e55dbe8aa60cfa9651b',
  '0x2ac80a179644685c2eebeca05666af0afcda968b',
  '0x22c050c3a4d9b36ba891b423f41c590eebea57d2',
  '0x97f0eb330bc96b6616059f97e5a40c07c1b2c309',
  '0x4bfcd37c9fe0bdf63087f0b503e664b187a06394',
  '0x25719036b3807507a26273bbbbd91f5013f78d97',
  '0x195b45c2cb7a60b05873097d12de9fd66b2fb675',
  '0xdd5158250383dc60890953542c90441a8dcaa79f',
  '0xcee249f54c1c9538ad326af009a2fc8ca2b1db30',
  '0x2639f741d385555d25af2a48fc94aca011637547',
  '0x81da05efe10050d359134a36645ca72cf7e24338',
  '0x161b2a94992c6b99b2348c8d162630bb0a70ebff',
  '0xf3e7bff2625b025ab7f8141e26c941f34f8aff30',
  '0xc53f5ad9f5dac10d43f6c83fb917eec8ef844e89',
  '0xba6103a1e1fdd7755f81fa1daaaf7395e8558d2d',
  '0x31d74766c3b6a9e8213ac9a1bda2f2a0813e6796',
  '0x893d952124552f127b5eb25809e6f88a09d4f24c',
  '0x674762935670a5ce203f5d112c26a4ad7b2ba9f6',
  '0xec23364be2a9d61ae0f43629cfdd4b7a71ad9a7e',
  '0xa13082af7d6eec298f411d3f9c07a412deaf9868',
  '0x765a16a79e5c0720a86e62e6ce93afe97751e0d4',
  '0x024552006627d5bba0c931d65d7911c95cb8327b',
  '0xfe69d56af3e82777f3de830b499d340fe0b4b078',
  '0x2e3de1087a538b8913c72e8ffd29efaa506f5f4b',
  '0x6fc10d1526653b1976f19e3165dc4e4d0a068dd3',
  '0xfdf4a1eca94e945d68eb32827d5909b1267a53ed',
  '0xb54ff777c6556e78908dd99caa4bae711077a6d0',
  '0x6f798dd6eeb4f3895dcc102d785c564c78b18d09',
  '0xf3dd444f5e33ac3ffcb95e79487fd03f977f70da',
  '0x7fb11d7b6c448db258ff46844975791cb8b2f501',
  '0x091c8d4c7e50c5c3360fbd5375fd2082768a917c',
  '0x1cbdb5f1b2544593d99fa619cc841c31c74703e5',
  '0xc53912c5548a9f4fff7ae802732fab1e50a0d63b',
  '0x3af3534876bdc23f8670c6641f50dba85ec42e31',
  '0xdfc450ec36943fd7a05d028aa7fb2016da59526f',
  '0x38a22aa99145be4d3c3d79cab921bb36810c465b',
  '0xd84496482f3e31684b7d35a4f71c37e698fa43f5',
  '0x2997c436b61129bf0e3b2e182616488b647a3367',
  '0xc926e9dac836901503001da6c8de17984b8c0c07',
  '0x87758a41b42428b6bcf9f6cb219e17cf666f4715',
  '0xaf60390ef5bdf3c37178d2f566ff481fc27b772f',
  '0xe1d36d4ff710cc845cb77b2915ccd7f1cc0ba5be',
  '0xeebb7417b0f58b50b6764200ab5ff1fd14828155',
  '0xd8bd7c3154b39f1d85bad10c95f88dcaf09a24c7',
  '0x6927f867aa90c98c23d9bf92c721e9c14640b33c',
  '0x36a35697dbcd3ca514278e13eb95344a441ebb90',
  '0x5a2121073e3da1877d38d3213173124dd9de618e',
  '0xa783de8ddfdd765fe33a5f52eaa571edc8f1da54',
  '0x3071f8b6e1247315a7fd258ac4f026edd84b5eca',
  '0x1741ec983983e0ab3704cc9766be11f1bae34338',
  '0xffa90ad2cb22825f6b32b50e03a063b4d5f19e2d',
  '0xab91cbed86181536e3d32fa9fe71ad7e48813cd2',
  '0x1543068004baa5348ac900a7ef1252d4738f114c',
  '0x842b8513c934cce63df21a4bda424638b52e5a21',
  '0xde3796e66603e7f232c541f01da1496bcd29a90a',
  '0x5b4530d811810e28ce1d5fa4569958ca0e51abfd',
  '0xedb12355dc039980d391318698179ec9f2e07f14',
  '0xfb5453425e580a9a4d353a3972cec36d05cf4ef1',
  '0xeb2d339b3d9a65e13bf0f2d16a9d9dab1c749b6b',
  '0xcf5134570efb996aeb58eb1fa4db33ef7ba99e32',
  '0xcb49cb7b4a86c0d8f12f9fcf66394f97329c4f09',
  '0xf6d531d08820a5f00fb18415e46612f611b27c88',
  '0x499f358f01af52269a394c72dff109a4f1073f22',
  '0x8d02f8506179deee3d11fa48b9f4f689f942e6db',
  '0x03bca956697a227ba6e0d507dd3382edff1c3f2e',
  '0xd9c9ce2860ff1b86b1056c669af73cbbfdd16496',
  '0x5ff4f20539465ab781e47bdf490fddf3240747a0',
  '0x4b10bc9c0fa74fbfc1adc6ac6874b7de8ddc3cb5',
  '0x35c2f6a5e45d735c1e175e54970af8efbbe1f7c4',
  '0xacf978adc9d426088ba01b034b035c8bcdb937f2',
  '0x7f6da1936cebf52ed7a1519ef16f65a936f6c807',
  '0x789bd492306e5d09080d3b5d37abdd25f384099c',
  '0x9ff7302871eb3bd8e07326961b9dff81857919e1',
  '0x365370d7304694154e21e50a992bb00f0d256843',
  '0xd3bb402937e95c7372ff41c679501fe21823d8f7',
  '0xc3b866302ae4a29e0503d7a4925971abb49c2f41',
  '0x2a6f4c9c4e57ecb712f9212ecb42df41f2e22200',
  '0x94d908890fa0b3ef82d97ab9f1138a1639a55b3f',
  '0xef60471d6b8321a902b9c1cdaa6b7218a78bee17',
  '0x88234d853659c5a7fc55778dbb869aa99f317ed4',
  '0x44aa6332c2bb5dfaf7811aca189be03310ce8b44',
  '0xd79e43578a91ff2b5682ef7dfb6ee381f21e50ca',
  '0x4c70addc4e9eef525ec95cb9e5882f30d94c7d3c',
  ... 11 more items ]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[ '0x7ff5587568854bebe22fc75d663dacd4b6aaceb9' ]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 
ubuntu@ip-172-31-22-203:~/test-augur$ npm build
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
websocket wss://kovan.augur.net/ethereum-ws opened
connected to ethereum
[ '0x7ff5587568854bebe22fc75d663dacd4b6aaceb9' ]
[ { id: '0x7ff5587568854bebe22fc75d663dacd4b6aaceb9',
    universe: '0xe0fb73227c37051611c3edc091d6858f2a230ffe',
    marketType: 'yesNo',
    numOutcomes: 2,
    minPrice: '0',
    maxPrice: '1',
    cumulativeScale: '1',
    author: '0x57f9d342295e4b21deff93ed415f50ec1004c813',
    consensus: null,
    creationTime: 1538862072,
    creationBlock: 8986054,
    creationFee: '0.01',
    settlementFee: '0.0101',
    reportingFeeRate: '0.0001',
    marketCreatorFeeRate: '0.01',
    marketCreatorFeesBalance: '0',
    marketCreatorMailbox: '0x379697994dc19bcf1b77895cebc9541491280ca7',
    marketCreatorMailboxOwner: '0x57f9d342295e4b21deff93ed415f50ec1004c813',
    initialReportSize: null,
    category: 'STOCKS',
    tags: [ 'SPY', 'S&P500' ],
    volume: '0.75',
    openInterest: '1.5',
    outstandingShares: '1.5',
    feeWindow: '0x0000000000000000000000000000000000000000',
    endTime: '1540944000',
    finalizationBlockNumber: null,
    finalizationTime: null,
    lastTradeBlockNumber: 8988812,
    lastTradeTime: 1538883392,
    reportingState: 'PRE_REPORTING',
    forking: false,
    needsMigration: false,
    description: 'Will the S&P 500 index ($SPY) close above $300 on October 30th, 2018?',
    details: 'The market will resolve using data from Yahoo Finance.',
    scalarDenomination: null,
    designatedReporter: '0x57f9d342295e4b21deff93ed415f50ec1004c813',
    designatedReportStake: '0.349680582682291667',
    resolutionSource: 'https://finance.yahoo.com/quote/spy?ltr=1',
    numTicks: '10000',
    outcomes: [ [Object], [Object] ],
    tickSize: '0.0001' } ]
[ethrpc] eth_subscribe request failed, fall back to polling for blocks: Couldn't parse parameters: newHeads
^C
ubuntu@ip-172-31-22-203:~/test-augur$ npm start

> test-augur@1.0.0 start /home/ubuntu/test-augur
> node server.js

connecting to augur-node: ws://127.0.0.1:9001
connecting to ethereum-node: {"httpAddresses":["http://127.0.0.1:8545","https://kovan.augur.net/ethereum-http"],"wsAddresses":["ws://127.0.0.1:8546","wss://kovan.augur.net/ethereum-ws"]}
websocket ws://127.0.0.1:8546 closed: 1006 connection failed
websocket ws://127.0.0.1:9001 opened
connected to augur
^C
ubuntu@ip-172-31-22-203:~/test-augur$ vim server.js 

  
var Augur = require("augur.js");
var augur = new Augur();


// date/time within a fee/dispute window

var ethereumNode = {
  httpAddresses: [
    "http://127.0.0.1:8545", // local HTTP address for Geth node
    "https://kovan.augur.net/ethereum-http" // hosted http address for Geth node on the Rinkeby test network
  ],
  wsAddresses: [
    "ws://127.0.0.1:8546", // local WebSocket address for Geth node
    "wss://kovan.augur.net/ethereum-ws" // hosted WebSocket address for Geth node on the Rinkeby test network
  ]
  // ipc addresses can also be specified as:
  // ipcAddresses: [ ... ]
};        
// To connect to a hosted Augur Node instead of a local Augur Node, substitute its WebSocket address below.
var augurNode = "ws://127.0.0.1:9001"; // local WebSocket address for an Augur Node
         
// Attempt to connect to a local Ethereum node
augur.connect({ ethereumNode, augurNode }, (err, connectionInfo) => {
  // do stuff
augur.markets.getMarketsInCategory({
  universe: "0xe0fb73227c37051611c3edc091d6858f2a230ffe",
  category: "STOCKS",
}, function (error, result) {
  console.log(result);
  augur.markets.getMarketsInfo({
  marketIds: result,
}, function (error, result) {
  console.log(result);
}); 
});
        //0xe0fb73227c37051611c3edc091d6858f2a230ffe
});// If that fails, fall back to the hosted Ethereum node
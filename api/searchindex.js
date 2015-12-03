Search.setIndex({envversion:46,filenames:["modules","zephyr","zephyr.backend","zephyr.backend.Tests","zephyr.frontend","zephyr.middleware"],objects:{"":{zephyr:[1,0,0,"-"]},"zephyr.backend":{Tests:[3,0,0,"-"],analytical:[2,0,0,"-"],discretization:[2,0,0,"-"],eurus:[2,0,0,"-"],meta:[2,0,0,"-"],minizephyr:[2,0,0,"-"],solver:[2,0,0,"-"],source:[2,0,0,"-"]},"zephyr.backend.Tests":{test_Analytical:[3,0,0,"-"],test_Eurus:[3,0,0,"-"],test_Meta:[3,0,0,"-"],test_MiniZephyr:[3,0,0,"-"],test_Sources:[3,0,0,"-"]},"zephyr.backend.Tests.test_Analytical":{TestAnalyticalHelmholtz:[3,2,1,""]},"zephyr.backend.Tests.test_Analytical.TestAnalyticalHelmholtz":{setUp:[3,3,1,""],test_cleanExecution:[3,3,1,""]},"zephyr.backend.Tests.test_Eurus":{TestEurus:[3,2,1,""]},"zephyr.backend.Tests.test_Eurus.TestEurus":{elementNorm:[3,4,1,""],setUp:[3,3,1,""],test_cleanExecution:[3,3,1,""],test_compareAnalytical_Elliptical:[3,3,1,""],test_compareAnalytical_Isotropic:[3,3,1,""]},"zephyr.backend.Tests.test_Meta":{TestMeta:[3,2,1,""]},"zephyr.backend.Tests.test_Meta.TestMeta":{setUp:[3,3,1,""],test_mapperAsExpected:[3,3,1,""]},"zephyr.backend.Tests.test_MiniZephyr":{TestMiniZephyr:[3,2,1,""]},"zephyr.backend.Tests.test_MiniZephyr.TestMiniZephyr":{elementNorm:[3,4,1,""],setUp:[3,3,1,""],test_cleanExecution25D:[3,3,1,""],test_cleanExecution25DParallel:[3,3,1,""],test_cleanExecution:[3,3,1,""],test_compareAnalytical25D:[3,3,1,""],test_compareAnalytical:[3,3,1,""]},"zephyr.backend.Tests.test_Sources":{TestSources:[3,2,1,""]},"zephyr.backend.Tests.test_Sources.TestSources":{elementNorm:[3,4,1,""],setUp:[3,3,1,""],test_KaiserSource:[3,3,1,""],test_KaiserSourceSimpleCase:[3,3,1,""],test_cleanExecution:[3,3,1,""]},"zephyr.backend.analytical":{AnalyticalHelmholtz:[2,2,1,""]},"zephyr.backend.analytical.AnalyticalHelmholtz":{"__call__":[2,3,1,""],"__mul__":[2,3,1,""],Green2D:[2,3,1,""],Green3D:[2,3,1,""]},"zephyr.backend.discretization":{BaseDiscretization:[2,2,1,""],DiscretizationWrapper:[2,2,1,""],MultiFreq:[2,2,1,""]},"zephyr.backend.discretization.BaseDiscretization":{"__mul__":[2,3,1,""],Ainv:[2,1,1,""],c:[2,1,1,""],initMap:[2,1,1,""],rho:[2,1,1,""],shape:[2,1,1,""]},"zephyr.backend.discretization.DiscretizationWrapper":{cacheItems:[2,1,1,""],initMap:[2,1,1,""],scaleTerm:[2,1,1,""],spUpdates:[2,1,1,""],subProblems:[2,1,1,""]},"zephyr.backend.discretization.MultiFreq":{"__mul__":[2,3,1,""],disc:[2,1,1,""],initMap:[2,1,1,""],maskKeys:[2,1,1,""],parallel:[2,1,1,""],spUpdates:[2,1,1,""]},"zephyr.backend.eurus":{Eurus:[2,2,1,""]},"zephyr.backend.eurus.Eurus":{A:[2,1,1,""],cPML:[2,1,1,""],dampcoeff:[2,1,1,""],initMap:[2,1,1,""],mord:[2,1,1,""],nPML:[2,1,1,""]},"zephyr.backend.meta":{AMMetaClass:[2,2,1,""],AttributeMapper:[2,2,1,""],BaseAnisotropic:[2,2,1,""],BaseModelDependent:[2,2,1,""],BaseSCCache:[2,2,1,""],ClassProperty:[2,2,1,""],SCFilter:[2,2,1,""]},"zephyr.backend.meta.AMMetaClass":{"__call__":[2,3,1,""]},"zephyr.backend.meta.AttributeMapper":{initMap:[2,1,1,""],optional:[2,1,1,""],required:[2,1,1,""]},"zephyr.backend.meta.BaseAnisotropic":{delta:[2,1,1,""],eps:[2,1,1,""],initMap:[2,1,1,""],theta:[2,1,1,""]},"zephyr.backend.meta.BaseModelDependent":{dx:[2,1,1,""],dy:[2,1,1,""],dz:[2,1,1,""],freeSurf:[2,1,1,""],initMap:[2,1,1,""],modelDims:[2,1,1,""],nrow:[2,1,1,""],toLinearIndex:[2,3,1,""],toVecIndex:[2,3,1,""],xorig:[2,1,1,""],yorig:[2,1,1,""],zorig:[2,1,1,""]},"zephyr.backend.meta.BaseSCCache":{cacheItems:[2,1,1,""],clearCache:[2,3,1,""],initMap:[2,1,1,""],maskKeys:[2,1,1,""],systemConfig:[2,1,1,""]},"zephyr.backend.meta.SCFilter":{"__call__":[2,3,1,""]},"zephyr.backend.minizephyr":{MiniZephyr25D:[2,2,1,""],MiniZephyr:[2,2,1,""]},"zephyr.backend.minizephyr.MiniZephyr":{"__mul__":[2,3,1,""],A:[2,1,1,""],initMap:[2,1,1,""],ky:[2,1,1,""],mord:[2,1,1,""],nPML:[2,1,1,""],premul:[2,1,1,""]},"zephyr.backend.minizephyr.MiniZephyr25D":{"__mul__":[2,3,1,""],cmin:[2,1,1,""],disc:[2,1,1,""],initMap:[2,1,1,""],kyweights:[2,1,1,""],maskKeys:[2,1,1,""],nky:[2,1,1,""],parallel:[2,1,1,""],pkys:[2,1,1,""],scaleTerm:[2,1,1,""],spUpdates:[2,1,1,""]},"zephyr.backend.solver":{DirectSolver:[2,2,1,""]},"zephyr.backend.solver.DirectSolver":{"__mul__":[2,3,1,""],A:[2,1,1,""],Ainv:[2,1,1,""],Solver:[2,1,1,""],shape:[2,1,1,""]},"zephyr.backend.source":{AnisotropicKaiserSource:[2,2,1,""],BaseSource:[2,2,1,""],FakeSource:[2,2,1,""],KaiserSource:[2,2,1,""],SimpleSource:[2,2,1,""],SparseKaiserSource:[2,2,1,""],StackedSimpleSource:[2,2,1,""]},"zephyr.backend.source.AnisotropicKaiserSource":{initMap:[2,1,1,""],modifyGrid:[2,3,1,""]},"zephyr.backend.source.BaseSource":{initMap:[2,1,1,""]},"zephyr.backend.source.FakeSource":{initMap:[2,1,1,""]},"zephyr.backend.source.KaiserSource":{initMap:[2,1,1,""]},"zephyr.backend.source.SimpleSource":{"__call__":[2,3,1,""],dist:[2,3,1,""],initMap:[2,1,1,""],linIndexOf:[2,3,1,""],vecIndexOf:[2,3,1,""]},"zephyr.backend.source.SparseKaiserSource":{"__call__":[2,3,1,""],HC_KAISER:[2,1,1,""],initMap:[2,1,1,""],ireg:[2,1,1,""],kws:[2,3,1,""],modifyGrid:[2,3,1,""]},"zephyr.backend.source.StackedSimpleSource":{initMap:[2,1,1,""]},"zephyr.frontend":{cli:[4,0,0,"-"]},"zephyr.middleware":{fields:[5,0,0,"-"],problem:[5,0,0,"-"],survey:[5,0,0,"-"]},"zephyr.middleware.fields":{HelmFields:[5,2,1,""]},"zephyr.middleware.fields.HelmFields":{aliasFields:[5,1,1,""],dtype:[5,1,1,""],knownFields:[5,1,1,""],startup:[5,3,1,""]},"zephyr.middleware.problem":{Helm25DProblem:[5,2,1,""],Helm2DProblem:[5,2,1,""],HelmBaseProblem:[5,2,1,""]},"zephyr.middleware.problem.Helm25DProblem":{initMap:[5,1,1,""],surveyPair:[5,1,1,""]},"zephyr.middleware.problem.Helm2DProblem":{initMap:[5,1,1,""],surveyPair:[5,1,1,""]},"zephyr.middleware.problem.HelmBaseProblem":{Jtvec:[5,3,1,""],SystemWrapper:[5,1,1,""],cacheItems:[5,1,1,""],fields:[5,3,1,""],initMap:[5,1,1,""],surveyPair:[5,1,1,""],system:[5,1,1,""],updateModel:[5,3,1,""]},"zephyr.middleware.survey":{Helm25DSurvey:[5,2,1,""],Helm2DSurvey:[5,2,1,""],HelmBaseSurvey:[5,2,1,""],HelmRx:[5,2,1,""],HelmSrc:[5,2,1,""]},"zephyr.middleware.survey.Helm25DSurvey":{initMap:[5,1,1,""]},"zephyr.middleware.survey.Helm2DSurvey":{initMap:[5,1,1,""]},"zephyr.middleware.survey.HelmBaseSurvey":{dpred:[5,3,1,""],geom:[5,1,1,""],initMap:[5,1,1,""],mode:[5,1,1,""],nD:[5,1,1,""],nfreq:[5,1,1,""],nrec:[5,1,1,""],nsrc:[5,1,1,""],projectFields:[5,3,1,""],rLocs:[5,1,1,""],rTerms:[5,1,1,""],rVec:[5,3,1,""],rVecs:[5,1,1,""],rhsGenerator:[5,1,1,""],sLocs:[5,1,1,""],sTerms:[5,1,1,""],sVecs:[5,1,1,""],srcPair:[5,1,1,""],vnD:[5,1,1,""]},zephyr:{backend:[2,0,0,"-"],frontend:[4,0,0,"-"],middleware:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:staticmethod"},terms:{"__call__":2,"__mul__":2,"_cmin":2,"_cpml":2,"_delta":2,"_disc":2,"_dx":[2,5],"_dz":[2,5],"_ep":2,"_freesurf":[2,5],"_ireg":2,"_ky":2,"_mord":2,"_nky":2,"_npml":2,"_parallel":2,"_premul":2,"_rho":2,"_scaleterm":2,"_solver":2,"_subproblem":2,"_system":5,"_tau":2,"_theta":2,"_xorig":[2,5],"_zorig":[2,5],"case":[2,3],"class":[2,3,5],"float":2,"function":2,"return":2,"static":3,"true":[2,5],accommod:2,acoust:2,action:2,addit:2,ainv:2,alia:5,aliasfield:5,all:2,allow:2,ammetaclass:2,analyt:[],analyticalhelmholtz:2,ani:2,anisotropickaisersourc:2,appli:2,appropri:2,approxim:2,arbitrari:2,arg:[2,5],argument:2,around:2,arr:3,arrai:2,attribut:2,attributemapp:[],augment:2,axi:2,azi:2,backend:[],band:2,base:[2,3,5],baseanisotrop:2,basediscret:2,basedist:[],baseipydist:[],basemodeldepend:[2,5],basempdist:[],baseproblem:5,baserx:5,basesccach:[2,5],basesourc:2,basesrc:5,basesurvei:5,basic:2,been:5,behaviour:2,between:2,bind:5,bool:2,bound:5,bulk:2,cach:2,cacheitem:[2,5],calcul:2,call:2,callabl:2,carri:2,cell:2,centr:2,choic:2,chosen:2,classproperti:2,clear:2,clearcach:2,cli:[],clslist:2,cmin:2,code:2,complex128:[2,5],complex:2,compon:2,composit:2,condit:2,configur:2,construct:2,contain:2,content:[],coordin:2,copi:2,correspond:2,cpml:2,cross:2,dampcoeff:2,data:5,decor:2,defin:2,delta:2,dens:2,densiti:2,depend:2,depth:2,determin:2,dft:2,dict:[2,5],dictionari:2,differ:2,direct:2,directsolv:2,disc:2,discard:2,discret:[],discretizationwrapp:2,dist:2,distanc:2,distribut:2,distributor:[],doe:2,domain:[2,5],dpred:5,dtype:5,each:2,effici:2,element:2,elementnorm:3,ellipt:2,enabl:2,equal:2,equival:2,error:2,euru:[],exampl:2,except:[2,5],exist:2,expect:2,factor:2,fakesourc:2,fals:[2,5],fanci:5,field:[],filter:2,find:2,finit:2,first:2,float64:[2,5],form:2,forward:2,fourier:2,fraction:2,free:2,freesurf:[2,5],freq:[2,5],freqind:5,frequenc:[2,5],from:2,frontend:[],gener:2,geom:5,geophys:2,get:2,given:2,graham:2,green2d:2,green3d:2,green:2,grid:2,gridpoint:2,half:2,hand:2,handl:2,hc_kaiser:2,helm25dproblem:5,helm25dsurvei:5,helm2dproblem:5,helm2dsurvei:5,helmbaseproblem:5,helmbasesurvei:5,helmfield:5,helmholtz:2,helmrx:5,helmsrc:5,hick:2,how:2,howev:2,imaginari:2,implement:2,includ:2,index:2,indic:2,initi:2,initmap:[2,5],input:2,instanc:2,instanti:2,int64:[2,5],interpol:2,interpret:2,invers:2,invert:2,ireg:2,isrc:5,item:2,iter:2,jtvec:5,kaiser:2,kaisersourc:2,kaiserwindowedsinc:2,kei:2,kept:2,knownfield:5,kwarg:[2,5],kyweight:2,layer:2,level:2,like:2,limit:2,lind:2,line:2,linear:2,linindexof:2,list:2,loc:[2,5],locat:2,lonekei:5,low:2,mainli:2,make:2,mappabl:2,maskkei:2,match:2,matrix:2,mesh:5,meta:[],metaclass:2,methodnam:3,middlewar:[],minimum:2,minizephyr25d:2,minizephyr:[],mode:5,model:2,modeldim:2,modifygrid:2,modul:[],mord:2,multifreq:[2,5],multipl:2,multipli:2,myproblem:5,ndarrai:2,nearest:2,nfreq:5,nky:2,node:2,none:[2,5],noth:2,npml:2,nrec:5,nrow:2,nsrc:5,number:[2,5],numpi:[2,5],object:[2,5],offset:2,oper:2,option:2,order:2,out:2,output:2,over:2,overrid:2,packag:[],pair:5,parallel:2,paramet:2,part:2,pass:2,perfectli:2,phi:5,physic:2,pky:2,pml:2,point:2,posit:2,premul:2,premultipl:2,present:2,pretend:2,print:5,problem:[],process:2,product:2,program:2,projectfield:5,properti:2,quadratur:2,rais:[2,5],ravel:2,real:2,receiv:2,region:2,regular:2,renam:2,repres:2,requir:[2,5],reset:2,respons:2,rho:2,rhsgener:5,right:2,rloc:5,routin:2,rterm:5,runtest:3,rvec:5,rxlist:5,rxtype:5,same:2,sampl:2,scale:2,scaleterm:2,scfilter:2,scheme:2,scipi:2,second:2,seri:2,serialmultifreq:[],set:2,setup:3,shape:2,side:2,simpeg:5,simpl:2,simplesourc:2,sinc:2,size:2,sloc:[2,5],solv:2,solver:[],some:2,sourc:[],space:2,spars:2,sparsekais:2,sparsekaisersourc:2,special:2,spupdat:2,src0:5,srcpair:5,stackedsimplesourc:2,stand:2,startup:5,sterm:5,storag:5,store:2,stretch:2,string:2,subclass:2,submodul:[],subpackag:[],subproblem:2,subsclass:2,suitabl:2,summat:2,support:2,surfac:2,survei:[],surveypair:5,svec:5,system:[2,5],systemconfig:[2,5],systemwrapp:5,take:2,tau:2,term:2,test:[],test_analyt:[],test_cleanexecut:3,test_cleanexecution25d:3,test_cleanexecution25dparallel:3,test_compareanalyt:3,test_compareanalytical25d:3,test_compareanalytical_ellipt:3,test_compareanalytical_isotrop:3,test_euru:[],test_kaisersourc:3,test_kaisersourcesimplecas:3,test_mapperasexpect:3,test_meta:[],test_minizephyr:[],test_sourc:[],testanalyticalhelmholtz:3,testcas:3,testeuru:3,testmeta:3,testminizephyr:3,testsourc:3,thei:2,thereof:2,theta:2,thi:2,third:2,those:2,tilt:2,tolinearindex:2,tovecindex:2,tree:2,trivial:2,tupl:[2,5],twice:2,type:[2,5],typecast:2,unit:2,unittest:3,unmodifi:2,updat:2,updatemodel:5,util:[],valu:2,valueerror:2,vec:2,vecindexof:2,vector:[2,5],veloc:2,version:2,visco:2,vnd:5,wai:2,wave:2,wavefield:2,wavenumb:2,weight:2,when:2,wherea:2,whether:2,which:2,width:2,window:2,wrap:2,wrapper:2,xorig:[2,5],yorig:[2,5],zero:2,zorig:[2,5]},titles:["zephyr","zephyr package","zephyr.backend package","zephyr.backend.Tests package","zephyr.frontend package","zephyr.middleware package"],titleterms:{analyt:2,attributemapp:[],backend:[2,3],cli:4,content:[1,2,3,4,5],diagram:[],discret:2,euru:2,field:5,frontend:4,inherit:[],meta:2,middlewar:5,minizephyr:2,modul:[1,2,3,4,5],packag:[1,2,3,4,5],problem:5,solver:2,sourc:2,submodul:[2,3,4,5],subpackag:[1,2,5],survei:5,test:3,test_analyt:3,test_euru:3,test_meta:3,test_minizephyr:3,test_sourc:3,util:5,zephyr:[0,1,2,3,4,5]}})
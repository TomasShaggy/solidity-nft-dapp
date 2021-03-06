import contract from "../contract/contract.json";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//0xd2Bc8300DfcFb8C3e0fB4DD2adDBDe9ad15Ba08F

//abi
//{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"components":[{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"social_1","type":"string"},{"internalType":"string","name":"social_2","type":"string"},{"internalType":"string","name":"websiteUri","type":"string"},{"internalType":"string","name":"price","type":"string"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"uint256","name":"presale","type":"uint256"},{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint8","name":"chain","type":"uint8"},{"internalType":"bool","name":"approved","type":"bool"}],"internalType":"struct ShaggyHunter.Drop","name":"_drop","type":"tuple"}],"name":"addDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"approveDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"drops","outputs":[{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"social_1","type":"string"},{"internalType":"string","name":"social_2","type":"string"},{"internalType":"string","name":"websiteUri","type":"string"},{"internalType":"string","name":"price","type":"string"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"uint256","name":"presale","type":"uint256"},{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint8","name":"chain","type":"uint8"},{"internalType":"bool","name":"approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDrops","outputs":[{"components":[{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"social_1","type":"string"},{"internalType":"string","name":"social_2","type":"string"},{"internalType":"string","name":"websiteUri","type":"string"},{"internalType":"string","name":"price","type":"string"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"uint256","name":"presale","type":"uint256"},{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint8","name":"chain","type":"uint8"},{"internalType":"bool","name":"approved","type":"bool"}],"internalType":"struct ShaggyHunter.Drop[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"components":[{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"social_1","type":"string"},{"internalType":"string","name":"social_2","type":"string"},{"internalType":"string","name":"websiteUri","type":"string"},{"internalType":"string","name":"price","type":"string"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"uint256","name":"presale","type":"uint256"},{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint8","name":"chain","type":"uint8"},{"internalType":"bool","name":"approved","type":"bool"}],"internalType":"struct ShaggyHunter.Drop","name":"_drop","type":"tuple"}],"name":"updateDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

const initialInfo = {
  connected: false,
  status: null,
  account: null,
  contact: null,
};

const initialDropsState = {
  loading: false,
  list: [],
};

export default function DropList() {
  console.log(contract);

  const [info, setInfo] = useState(initialInfo);
  const [drops, setDrops] = useState(initialDropsState);

  const { register, handleSubmit } = useForm();

  const init = async () => {
    if (window.ethereum?.isMetaMask) {
      console.log("you have metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts, "<-- acounts");
      const networkId = await window.ethereum.request({
        method: "net_version",
      });
      if (networkId == 4) {
        let web3 = new Web3(window.ethereum);
        setInfo({
          ...initialInfo,
          connected: true,
          account: accounts[0],
          contract: new web3.eth.Contract(contract.abi, contract.address),
        });
      } else {
        setInfo({
          ...initialInfo,
          status: "You need to change the network",
        });
      }

      //
    } else {
      setInfo({ ...initialInfo, status: "You need metamask!" });
    }
  };

  console.log(info);

  const initOnChanged = () => {
    if (window.ethereum) {
      window.ethereum.on("accountChanged", () => {
        window.location.reload();
      });
    }
  };

  //1646168346

  const getDrops = async () => {
    setDrops((prevState) => ({
      ...prevState,
      loading: true,
    }));
    info.contract.methods
      .getDrops()
      .call()
      .then((res) => {
        setDrops({
          loading: false,
          list: res,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setDrops(initialDropsState);
      });
  };

  const onSubmit = (data) => {
    let newData = {
      imageUri: data.imageUri,
      name: data.name,
      description: data.description,
      social_1: data.social_1,
      social_2: data.social_2,
      websiteUri: data.websiteUri,
      price: data.price,
      supply: Number(data.supply),
      presale: Number(data.presale),
      sale: Number(data.sale),
      chain: Number(data.chain),
      approved: false,
    };
    console.log(Object.values(newData));
    info.contract.methods
      .addDrop(Object.values(newData))
      .send({ from: info.account })
      .then((res) => {
        setDrops({
          loading: false,
          list: res,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setDrops(initialDropsState);
      });
  };

  useEffect(() => {
    init();
    initOnChanged();
    console.log(window.etherem);
  }, []);

  return (
    <div className="bg-green-300">
      <button onClick={() => getDrops()}>Get Drops</button>

      {drops.list.map((item) => {
        const {
          name,
          description,
          sale,
          presale,
          social_1,
          social_2,
          imageUri,
        } = item;
        return (
          <div className="p-5 m-5 border-2 border-black" key={item.id}>
            <p>{name}</p>
            <p>{description}</p>
            <p>{sale}</p>
            <p>{presale}</p>
            <p>{social_1}</p>
            <p>{social_2}</p>
            <img src={imageUri} alt="xd" />
          </div>
        );
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>imageUri</label>
        <input {...register("imageUri")} />
        <br />
        <label>name</label>
        <input {...register("name")} />
        <br />
        <label>description</label>
        <input {...register("description")} />
        <br />
        <label>discord</label>
        <input {...register("social_2")} />
        <br />
        <label>twitter</label>
        <input {...register("social_1")} />
        <br />
        <label>webite</label>
        <input {...register("websiteUri")} />
        <br />
        <label>price</label>
        <input {...register("price")} />
        <br />
        <label>supply</label>
        <input {...register("supply")} />
        <br />
        <label>presale</label>
        <input {...register("presale")} />
        <br />
        <label>sale</label>
        <input {...register("sale")} />
        <br />
        <label>chain</label>
        <input {...register("chain")} />
        <br />

        <input
          type="submit"
          className="hover:bg-red-500 cursor-pointer mb-80"
        />
      </form>
    </div>
  );
}

/* "https://testtest.com/3.png",
"Test Collection",
"This is my drop of the month",
"twitter",
"https://testtest.com",
"Tomasinho",
"0.03",
"22",
"1635790237",
"1635790237",
1,
false */
